<template lang='pug' src='./Detail.pug'></template>

<script>
import jsonServices from './Services.json'

export default {
  name: 'ServiceDetails',
  data () {
    return {
      path: this.$route.params.id,
      serviceTitle: '',
      serviceScope: '',
      serviceImages: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'deneme-dalisi': 0,
        'tazeleme-dalisi': 1,
        'gelisim-dalisi': 2,
        'egitmen-hazirlik': 3,
        'gue-hazirlik': 4,
        'fotograf-cekimi': 5,
        'kurumsal-danismanlik': 6
      },
      // Certificates JSON
      services: jsonServices
    }
  },
  created () {
    var c = this.services[this.dict[this.path]]
    this.serviceTitle = c.title
    this.serviceScope = c.scope
    this.serviceImages = c.images
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
