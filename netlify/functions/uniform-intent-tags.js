require('dotenv').config()
const fetch = require('node-fetch')

function mapIntents(intents) {
  return intents.map((intent) => {
    return {
      id: intent.id,
      title: intent.name,
      description: intent.description,
      image_url:
        'https://pbs.twimg.com/profile_images/1235674864649830400/kd3pN6iU_400x400.jpg',
      last_update: Date.now(),
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
      'x-api-key': '77f7b1fe-7a74-4870-9b7b-a2efcda9adf9',
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
