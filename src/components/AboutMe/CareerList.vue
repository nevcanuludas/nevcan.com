<template lang="pug" src="./CareerList.pug"></template>

<script>
export default {
  name: 'CareerList',
  data () {
    return {
      isActiveTab: 'all',
      isCenterVisible: true,
      isMileStoneVisible: true,
      limitationList: 3,
      isShowMoreActive: true
    }
  },
  methods: {
    showCenters () {
      this.isActiveTab = 'divecenter'
      this.isShowMoreActive = false
      this.isCenterVisible = true
      this.isMileStoneVisible = false
    },
    showMileStones () {
      this.isActiveTab = 'milestone'
      this.isShowMoreActive = false
      this.isCenterVisible = false
      this.isMileStoneVisible = true
    },
    showAll () {
      this.isActiveTab = 'all'
      this.isShowMoreActive = false
      this.isCenterVisible = true
      this.isMileStoneVisible = true
    }
  }
}
</script>

<style lang="sass" src="./CareerList.sass" scoped></style>
