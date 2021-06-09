<template>
  <section class="component personalized-hero">
    <personalize :variations="variants">
      <template #default="{ variations, personalized }">
        <Hero :data="variations[0]" :tracking="false" />
        personalized: {{ personalized }}
      </template>
    </personalize>
  </section>
</template>

<script>
import { Personalize } from '@uniformdev/optimize-tracker-vue'
import Hero from '../../components/Hero.vue'

export default {
  components: {
    Personalize,
    Hero,
  },
  props: {
    slice: { type: Object, required: true },
  },
  computed: {
    variants() {
      return this.slice.items.map((hero) => {
        return {
          ...hero.hero_options.data,
          intentTag: this.mapIntentTagData(hero.hero_options.data.intent_tag),
        }
      })
    },
  },
  methods: {
    mapIntentTagData(intentField) {
      const result = { intents: {} }

      if (!intentField) {
        return {}
      }

      result.intents = {
        ...intentField,
      }
      return result
    },
  },
}
</script>
