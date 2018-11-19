<template lang="pug" src="./Conservation.pug"></template>

<script>
import AppConservationCompanyList from './ConservationCompanyList'

export default {
  name: 'Conservation',
  data () {
    return {
      sectionTitle: 'Koruma & Keşif Projeleri',
      conservations: [
        { id: 'pb-marmara', imageUrl: 'pb-marmara', name: 'Project Baseline: Marmara' },
        { id: 'dan-dalis-bagisi', imageUrl: 'dan-dalis-bagisi', name: 'DAN Dalış Bağışı' },
        { id: 'sualti-kultur-mirasinin-korunmasi', imageUrl: 'sualti-kultur-mirasinin-korunmasi', name: 'Sualtı Kültür Mirasının Korunması' },
        { id: 'suluin-magarasi', imageUrl: 'suluin-magarasi', name: 'Suluin Mağarası' }
      ]
    }
  },
  components: {
    'app-conservation-company-list': AppConservationCompanyList
  }
}
</script>

<style lang="sass" src="./Conservation.sass" scoped></style>
