import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser'
import { indexedDbScopeStorage } from '@uniformdev/optimize-tracker-storage-indexeddb'
import { cookieScoringStorage } from '@uniformdev/optimize-tracker'

import Cookie from 'cookie-universal'
import intentManifest from '~/static/intentManifest.json'

function createNuxtCookieStorage() {
  const cookiesApi = Cookie()

  const cookieStorage = cookieScoringStorage({
    getCookie: (name) => {
      const cookieValue = cookiesApi.get(name, { parseJSON: false })
      return cookieValue
    },

    setCookie: (name, value) => {
      if (typeof window === 'undefined') {
        return
      }

      cookiesApi.set(name, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        sameSite: 'strict',
        secure: window.location.protocol === 'https:',
      })
    },
  })

  return cookieStorage
}

const localTracker = createDefaultTracker({
  intentManifest,
  logLevelThreshold: 'info',
  storage: {
    scopes: indexedDbScopeStorage({
      scoringStorage: createNuxtCookieStorage(),
    }),
  },
})

export default localTracker
