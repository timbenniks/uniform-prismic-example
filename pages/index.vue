<template>
  <div class="page m-12">
    <GlobalNavigation />

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

    // console.log(
    //   this.$uniformOptimizeContext.tracker.getIntentStrength('visitor')
    // )
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
