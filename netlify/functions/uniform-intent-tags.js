require('dotenv').config()
const fetch = require('node-fetch')

function mapIntents(intents) {
  return intents.map((intent) => {
    return {
      id: intent.id,
      title: intent.name,
      description: intent.description,
      image_url: false,
      last_update: false,
      blob: {
        [intent.id]: {
          str: intent.signals[0].str,
        },
      },
    }
  })
}

exports.handler = async (event, context) => {
  const res = await fetch('https://uniform.app/api/v1/preview', {
    method: 'post',
    headers: {
      'x-api-key': '3e8230ff-bb65-4736-9adb-fa0910ad909e',
    },
  })

  const data = await res.json()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      results_size: data.site.intents.length,
      results: mapIntents(data.site.intents),
    }),
  }
}
