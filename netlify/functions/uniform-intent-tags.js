require('dotenv').config()
require('isomorphic-unfetch')

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
  const res = await fetch(
    `https://uniform.app/api/v1/manifest?preview=1&projectId=${process.env.UNIFORM_PROJECT_ID}`,
    {
      method: 'post',
      headers: {
        'x-api-key': process.env.UNIFORM_API_KEY,
      },
    }
  )

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
