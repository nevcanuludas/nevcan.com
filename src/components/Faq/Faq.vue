<template lang="pug" src="./Faq.pug"></template>

<script>
import jsonFaq from './Faq.json'

export default {
  name: 'Faq',
  data () {
    return {
      sectionTitle: 'Sıkça Sorulan Sorular',
      faq: jsonFaq,
      active_el: 0
    }
  },
  methods: {
    activate (el) {
      this.active_el = el
    }
  }
}
</script>

<style lang="sass" src="./Faq.sass" scoped></style>
