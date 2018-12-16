<template lang="pug" src="./Conservation.pug"></template>

<script>
import AppConservationCompanyList from './ConservationCompanyList'

export default {
  name: 'Conservation',
  data () {
    return {
      sectionTitle: 'Koruma & Keşif Projeleri',
      conservations: [
        {
          id: 'pb-marmara',
          imageUrl: 'pb-marmara',
          name: 'Project Baseline: Marmara',
          isVisible: true
        },
        {
          id: 'diver-safety-guardian',
          imageUrl: 'diver-safety-guardian',
          name: 'Diver Safety Guardian',
          isVisible: true
        },
        {
          id: 'sualti-kultur-mirasinin-korunmasi',
          imageUrl: 'sualti-kultur-mirasinin-korunmasi',
          name: 'Sualtı Kültür Mirasının Korunması',
          isVisible: true
        },
        {
          id: 'suluin-magarasi',
          imageUrl: 'suluin',
          name: 'Suluin Mağarası',
          isVisible: true
        }
      ]
    }
  },
  methods: {
    showAllConservations () {
      this.conservations[0].isVisible = true // PB Marmara
      this.conservations[1].isVisible = true // DAN
      this.conservations[2].isVisible = true // Sualtı Kültür Mirası
      this.conservations[3].isVisible = true // Suluin Mağarası
    },
    showConservation () {
      this.conservations[0].isVisible = true // PB Marmara
      this.conservations[1].isVisible = false // DAN
      this.conservations[2].isVisible = true // Sualtı Kültür Mirası
      this.conservations[3].isVisible = false // Suluin Mağarası
    },
    showExploration () {
      this.conservations[0].isVisible = false // PB Marmara
      this.conservations[1].isVisible = false // DAN
      this.conservations[2].isVisible = false // Sualtı Kültür Mirası
      this.conservations[3].isVisible = true // Suluin Mağarası
    },
    showResearch () {
      this.conservations[0].isVisible = false // PB Marmara
      this.conservations[1].isVisible = true // DAN
      this.conservations[2].isVisible = false // Sualtı Kültür Mirası
      this.conservations[3].isVisible = false // Suluin Mağarası
    }
  },
  components: {
    'app-conservation-company-list': AppConservationCompanyList
  }
}
</script>

<style lang="sass" src="./Conservation.sass" scoped></style>
