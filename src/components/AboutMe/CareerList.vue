<template lang="pug" src="./CareerList.pug"></template>

<script>
export default {
  name: 'CareerList',
  data () {
    return {
      isCenterVisible: true,
      isMileStoneVisible: true,
      limitationList: 3,
      isShowMoreActive: true
    }
  },
  methods: {
    showCenters () {
      this.isShowMoreActive = false
      this.isCenterVisible = true
      this.isMileStoneVisible = false
    },
    showMileStones () {
      this.isShowMoreActive = false
      this.isCenterVisible = false
      this.isMileStoneVisible = true
    },
    showAll () {
      this.isShowMoreActive = false
      this.isCenterVisible = true
      this.isMileStoneVisible = true
    }
  }
}
</script>

<style lang="sass" src="./CareerList.sass" scoped></style>
