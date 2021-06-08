<template>
  <section class="component personalized-hero-features">
    <pre>{{ variations }}</pre>
  </section>
</template>
<script>
export default {
  props: {
    slice: { type: Object, required: true },
  },
  computed: {
    variations() {
      return this.slice.items.map((hero) => {
        return {
          ...hero.hero_options.data,
          // intentTags: {
          //   intents: {
          //     [hero.hero_options.data.uniform_intent_tag.data.intent_tag.id]: {
          //       ...hero.hero_options.data.uniform_intent_tag.data.intent_tag,
          //     },
          //   },
          // },
        }
      })
    },
  },
}
</script>
