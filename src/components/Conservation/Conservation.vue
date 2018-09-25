<template lang="pug" src="./Conservation.pug"></template>

<script>
export default {
  name: 'Conservation',
  data () {
    return {
      sectionTitle: 'Koruma & Keşif Projeleri',
      conservations: [
        { id: 'pb-marmara', imageUrl: 'pb-marmara', name: 'Project Baseline: Marmara' }
      ]
    }
  }
}
</script>

<style lang="sass" src="./Conservation.sass" scoped></style>
