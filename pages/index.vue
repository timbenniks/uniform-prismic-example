<template>
  <div class="page">
    <ul class="mb-8">
      <li><nuxt-link to="/">Home page</nuxt-link></li>
      <li><nuxt-link to="/developer">Developers page</nuxt-link></li>
      <li><nuxt-link to="/marketer">Marketers page</nuxt-link></li>
    </ul>

    <slice-zone
      type="page"
      uid="home"
      :params="{
        fetchLinks: links,
      }"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
export default {
  components: {
    SliceZone,
  },
  data() {
    return {
      links: `hero.title,
        hero.description,
        hero.image,
        hero.intent_tag`,
    }
  },
  head: {
    title: 'Uniform',
  },
  watch: {
    '$route.query'() {
      this.reevaluateSignals()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.reevaluateSignals()
    })
  },
  methods: {
    reevaluateSignals() {
      if (!this.$uniformOptimizeContext.trackerInitializing) {
        this.$uniformOptimizeContext.tracker.reevaluateSignals()
      }
    },
  },
}
</script>
