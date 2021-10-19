<template>
  <section class="hero">
    <h1>{{ data.title[0].text }}</h1>
    <p>{{ data.description[0].text }}</p>
    <img :src="data.image.url" width="200" />
  </section>
</template>
<script>
export default {
  name: 'Hero',
  props: {
    data: { type: Object, required: true },
    tracking: { type: Boolean, required: false, default: true },
  },
  mounted() {
    if (this.tracking) {
      this.$uniformOptimize.trackBehavior(this.data.intentTag)
    }
  },
}
</script>

<style>
.hero {
  border-radius: 2rem;
  background: #dedede;
  padding: 1rem;
}

h1 {
  font-size: 2rem;
}
</style>
