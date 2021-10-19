<template>
  <section class="component personalized-hero">
    <personalize :variations="variants">
      <template #variation="{ personalized, variation }">
        <Hero :data="variation.item" :tracking="false" />

        <div class="bg-gray-50 mt-8 p-4 rounded-xl border-dashed border-2">
          <ul class="mb-4">
            <li>Personalized: {{ personalized }}</li>
            <li>Component Matches: {{ variation.matches }}</li>
            <li>Component relevancy: {{ variation.relevancy }}</li>
            <li>Component tag strength: {{ variation.tagStrength }}</li>
            <li>Component is default: {{ variation.isDefault }}</li>
          </ul>

          <button
            class="bg-gray-500 text-white py-2 px-3 rounded"
            @click="getScore()"
          >
            Show Personalization Score
          </button>
          <pre v-if="showScore" class="mt-4">{{ scoring }}</pre>
        </div>
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
  data() {
    return {
      showScore: false,
      scoring: {
        developer: { str: 0 },
        marketer: { str: 0 },
      },
    }
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
  unmounted() {
    this.showScore = false
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

    getScore() {
      this.$uniformOptimizeContext.tracker
        .getIntentStrength('visitor')
        .then((scores) => {
          this.scoring.developer = scores.developer || { str: 0 }
          this.scoring.marketer = scores.marketer || { str: 0 }

          this.showScore = true
        })
    },
  },
}
</script>
