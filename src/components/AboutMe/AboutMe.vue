<template lang="pug" src="./AboutMe.pug"></template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      sectionTitle: 'Hakkımda',
      isCenterVisible: true,
      isMileStoneVisible: true
    }
  },
  methods: {
    showCenters () {
      this.isCenterVisible = true
      this.isMileStoneVisible = false
    },
    showMileStones () {
      this.isCenterVisible = false
      this.isMileStoneVisible = true
    },
    showAll () {
      this.isCenterVisible = true
      this.isMileStoneVisible = true
    }
  }
}
</script>

<style lang="sass" src="./AboutMe.sass" scoped></style>
