<template>
  <section class="bg-green-100 rounded-xl p-4">
    <h1 class="text-4xl">{{ data.title[0].text }}</h1>
    <p class="my-2">{{ data.description[0].text }}</p>
    <img :src="`${data.image.url}&w=200`" width="200" />
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
