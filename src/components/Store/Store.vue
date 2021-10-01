<template lang="pug" src="./Store.pug"></template>

<script>
import jsonProducts from './Products.json'

export default {
  name: 'Store',
  data () {
    return {
      sectionTitle: 'Mağaza',
      sectionTitleEN: 'Store',
      products: jsonProducts,
      isActiveFilter: 'allProducts'
    }
  }
}
</script>

<style lang="sass" src="./Store.sass" scoped></style>
