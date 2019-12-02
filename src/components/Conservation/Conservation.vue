<template lang="pug" src="./Conservation.pug"></template>

<script>
import AppConservationCompanyList from './ConservationCompanyList'

export default {
  name: 'Conservation',
  data () {
    return {
      sectionTitle: 'Koruma & Keşif Projeleri',
      isActiveTab: 'all',
      conservations: [
        {
          id: 'pb-marmara',
          imageUrl: 'pb-marmara',
          name: 'PB Marmara',
          isVisible: true
        },
        {
          id: 'yayakarsa',
          imageUrl: 'yayakarsa',
          name: 'Ya Yakarsa',
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
        },
        {
          id: 'deniz-kiyi-plaj-temizligi',
          imageUrl: 'deniz-kiyi-plaj-temizligi',
          name: 'Deniz, Kıyı ve Plaj Temizliği',
          isVisible: true
        },
        {
          id: 'saros-sualti-muzesi',
          imageUrl: 'saros-sualti-muzesi',
          name: 'Saros Sualtı Müzesi',
          isVisible: true
        },
        {
          id: 'photogrammetry-dpv',
          imageUrl: 'photogrammetry-dpv',
          name: '3D Modelleme',
          isVisible: true
        }
      ]
    }
  },
  methods: {
    showAllConservations () {
      this.isActiveTab = 'all'
      this.conservations[0].isVisible = true // PB Marmara
      this.conservations[1].isVisible = true // yayakarsa
      this.conservations[2].isVisible = true // DAN
      this.conservations[3].isVisible = true // Sualtı Kültür Mirası
      this.conservations[4].isVisible = true // Suluin Mağarası
      this.conservations[5].isVisible = true // Deniz, Kıyı ve Plaj Temizliği
      this.conservations[6].isVisible = true // Saros Sualtı Müzesi
      this.conservations[7].isVisible = true // 3D Sualtı Modelleme
    },
    showConservation () {
      this.isActiveTab = 'conservation'
      this.conservations[0].isVisible = true // PB Marmara
      this.conservations[1].isVisible = false // yayakarsa
      this.conservations[2].isVisible = false // DAN
      this.conservations[3].isVisible = true // Sualtı Kültür Mirası
      this.conservations[4].isVisible = false // Suluin Mağarası
      this.conservations[5].isVisible = true // Deniz, Kıyı ve Plaj Temizliği
      this.conservations[6].isVisible = false // Saros Sualtı Müzesi
      this.conservations[7].isVisible = false // 3D Sualtı Modelleme
    },
    showExploration () {
      this.isActiveTab = 'exploration'
      this.conservations[0].isVisible = false // PB Marmara
      this.conservations[1].isVisible = false // yayakarsa
      this.conservations[2].isVisible = false // DAN
      this.conservations[3].isVisible = false // Sualtı Kültür Mirası
      this.conservations[4].isVisible = true // Suluin Mağarası
      this.conservations[5].isVisible = false // Deniz, Kıyı ve Plaj Temizliği
      this.conservations[6].isVisible = false // Saros Sualtı Müzesi
      this.conservations[7].isVisible = false // 3D Sualtı Modelleme
    },
    showResearch () {
      this.isActiveTab = 'research'
      this.conservations[0].isVisible = false // PB Marmara
      this.conservations[1].isVisible = true // yayakarsa
      this.conservations[2].isVisible = true // DAN
      this.conservations[3].isVisible = false // Sualtı Kültür Mirası
      this.conservations[4].isVisible = false // Suluin Mağarası
      this.conservations[5].isVisible = false // Deniz, Kıyı ve Plaj Temizliği
      this.conservations[6].isVisible = false // Saros Sualtı Müzesi
      this.conservations[7].isVisible = false // 3D Sualtı Modelleme
    },
    showProject () {
      this.isActiveTab = 'project'
      this.conservations[0].isVisible = false // PB Marmara
      this.conservations[1].isVisible = false // yayakarsa
      this.conservations[2].isVisible = false // DAN
      this.conservations[3].isVisible = false // Sualtı Kültür Mirası
      this.conservations[4].isVisible = false // Suluin Mağarası
      this.conservations[5].isVisible = false // Deniz, Kıyı ve Plaj Temizliği
      this.conservations[6].isVisible = true // Saros Sualtı Müzesi
      this.conservations[7].isVisible = true // 3D Sualtı Modelleme
    }
  },
  components: {
    'app-conservation-company-list': AppConservationCompanyList
  }
}
</script>

<style lang="sass" src="./Conservation.sass" scoped></style>
