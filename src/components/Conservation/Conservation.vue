<template lang="pug" src="./Conservation.pug"></template>

<script>
import AppConservationCompanyList from './ConservationCompanyList'

export default {
  name: 'Conservation',
  data () {
    return {
      sectionTitle: 'Koruma & Keşif Projeleri',
      conservations: [
        { id: 'pb-marmara', imageUrl: 'pb-marmara', name: 'Project Baseline: Marmara' }
      ]
    }
  },
  components: {
    'app-conservation-company-list': AppConservationCompanyList
  }
}
</script>

<style lang="sass" src="./Conservation.sass" scoped></style>
