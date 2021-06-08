<template>
  <slice-zone
    type="page"
    uid="home"
    :params="{
      fetchLinks: links,
    }"
  />
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
        hero.uniform_intent_tag,
        uniform_intent_tag.intent_tag_title,
        uniform_intent_tag.intent_tag,
        uniform_intent_tag.nobeh,
        uniform_intent_tag.bahvior_strength,
        uniform_intent_tag.threshold,
        uniform_intent_tag.nopn,
        uniform_intent_tag.override`,
    }
  },
  head: {
    title: 'Uniform',
  },
}
</script>
