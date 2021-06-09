<template>
  <section class="component hero">
    <Hero :data="data" />
  </section>
</template>

<script>
import Hero from '../../components/Hero.vue'

export default {
  components: {
    Hero,
  },
  props: {
    slice: { type: Object, required: true },
  },
  computed: {
    data() {
      return {
        ...this.slice.primary,
        intentTag: { intents: { ...this.slice.primary.intent_tag } },
      }
    },
  },
}
</script>
