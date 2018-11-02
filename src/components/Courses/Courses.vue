<template lang="pug" src="./Courses.pug"></template>

<script>
export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      courses: [
        { id: '1-yildiz-dalici', imageUrl: '1star', name: '1* Dalıcı', isVisible: true },
        { id: '2-yildiz-dalici', imageUrl: '2star', name: '2* Dalıcı', isVisible: true },
        { id: '3-yildiz-dalici', imageUrl: '3star', name: '3* Dalıcı', isVisible: true },
        { id: 'modifiye-dalici', imageUrl: 'modified', name: 'Modifiye Dalıcı', isVisible: true },
        { id: 'batik-dalisi-uzmanligi', imageUrl: 'wreck', name: 'Batık Dalışı', isVisible: true },
        { id: 'derin-dalis-uzmanligi', imageUrl: 'deep', name: 'Derin Dalış', isVisible: true },
        { id: 'dpv-uzmanligi', imageUrl: 'dpv', name: 'DPV', isVisible: true },
        { id: 'kuru-elbise-uzmanligi', imageUrl: 'drysuit', name: 'Kuru Elbise', isVisible: true },
        { id: 'buz-dalisi-uzmanligi', imageUrl: 'ice', name: 'Buz Dalışı', isVisible: true },
        { id: 'magara-kesif-dalisi-uzmanligi', imageUrl: 'dcd', name: 'Mağara Dalışı', isVisible: true },
        { id: 'nitrox-uzmanligi', imageUrl: 'nitrox', name: 'Nitrox', isVisible: true },
        { id: 'sidemount-uzmanligi', imageUrl: 'sidemount', name: 'Sidemount', isVisible: true },
        { id: 'ilkyardim-uzmanligi', imageUrl: 'firstaid', name: 'İlkyardım', isVisible: true },
        { id: 'tanitim-dalisi-uzmanligi', imageUrl: 'dsd', name: 'Tanıtım Dalışı Uzmanlığı', isVisible: true },
        { id: 'yon-bulma-uzmanligi', imageUrl: 'navigation', name: 'Yön Bulma', isVisible: true },
        { id: 'zero-to-hero-egitimi', imageUrl: 'zerotohero', name: 'Zero to Hero', isVisible: true },
        { id: 'serbest-dalis-egitimi', imageUrl: 'freediving', name: 'Serbest Dalış', isVisible: true },
        { id: 'engelli-dalici-egitimi', imageUrl: 'handicap', name: 'Engelli Dalıcı', isVisible: true },
        { id: 'engelli-dalici-egitmen-asistani', imageUrl: 'edea', name: 'Engelli Dalıcı Eğitmen Asistanı', isVisible: true }
      ]
    }
  },
  methods: {
    showTssf () {
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = true // batik-dalisi-uzmanligi
      this.courses[5].isVisible = true // derin-dalis-uzmanligi
      this.courses[6].isVisible = false // dpv-uzmanligi
      this.courses[7].isVisible = false // kuru-elbise-uzmanligi
      this.courses[8].isVisible = false // buz-dalisi-uzmanligi
      this.courses[9].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = true // nitrox-uzmanligi
      this.courses[11].isVisible = false // sidemount-uzmanligi
      this.courses[12].isVisible = true // ilkyardim-uzmanligi
      this.courses[13].isVisible = true // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = true // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = false // serbest-dalis-egitimi
      this.courses[17].isVisible = true // engelli-dalici-egitimi
      this.courses[18].isVisible = true // engelli-dalici-egitmen-asistani
    },
    showProtec () {
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = true // batik-dalisi-uzmanligi
      this.courses[5].isVisible = false // derin-dalis-uzmanligi
      this.courses[6].isVisible = true // dpv-uzmanligi
      this.courses[7].isVisible = true // kuru-elbise-uzmanligi
      this.courses[8].isVisible = true // buz-dalisi-uzmanligi
      this.courses[9].isVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = true // nitrox-uzmanligi
      this.courses[11].isVisible = true // sidemount-uzmanligi
      this.courses[12].isVisible = false // ilkyardim-uzmanligi
      this.courses[13].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = false // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = true // serbest-dalis-egitimi
      this.courses[17].isVisible = true // engelli-dalici-egitimi
      this.courses[18].isVisible = false // engelli-dalici-egitmen-asistani
    },
    showScuba () {
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // batik-dalisi-uzmanligi
      this.courses[5].isVisible = false // derin-dalis-uzmanligi
      this.courses[6].isVisible = false // dpv-uzmanligi
      this.courses[7].isVisible = false // kuru-elbise-uzmanligi
      this.courses[8].isVisible = false // buz-dalisi-uzmanligi
      this.courses[9].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = false // nitrox-uzmanligi
      this.courses[11].isVisible = false // sidemount-uzmanligi
      this.courses[12].isVisible = false // ilkyardim-uzmanligi
      this.courses[13].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = false // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = false // serbest-dalis-egitimi
      this.courses[17].isVisible = false // engelli-dalici-egitimi
      this.courses[18].isVisible = false // engelli-dalici-egitmen-asistani
    },
    showSpecialty () {
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = true // batik-dalisi-uzmanligi
      this.courses[5].isVisible = true // derin-dalis-uzmanligi
      this.courses[6].isVisible = true // dpv-uzmanligi
      this.courses[7].isVisible = true // kuru-elbise-uzmanligi
      this.courses[8].isVisible = true // buz-dalisi-uzmanligi
      this.courses[9].isVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = true // nitrox-uzmanligi
      this.courses[11].isVisible = true // sidemount-uzmanligi
      this.courses[12].isVisible = true // ilkyardim-uzmanligi
      this.courses[13].isVisible = true // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = true // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = false // serbest-dalis-egitimi
      this.courses[17].isVisible = false // engelli-dalici-egitimi
      this.courses[18].isVisible = false // engelli-dalici-egitmen-asistani
    },
    showDisabled () {
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // batik-dalisi-uzmanligi
      this.courses[5].isVisible = false // derin-dalis-uzmanligi
      this.courses[6].isVisible = false // dpv-uzmanligi
      this.courses[7].isVisible = false // kuru-elbise-uzmanligi
      this.courses[8].isVisible = false // buz-dalisi-uzmanligi
      this.courses[9].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = false // nitrox-uzmanligi
      this.courses[11].isVisible = false // sidemount-uzmanligi
      this.courses[12].isVisible = false // ilkyardim-uzmanligi
      this.courses[13].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = false // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = false // serbest-dalis-egitimi
      this.courses[17].isVisible = true // engelli-dalici-egitimi
      this.courses[18].isVisible = true // engelli-dalici-egitmen-asistani
    },
    showFree () {
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // batik-dalisi-uzmanligi
      this.courses[5].isVisible = false // derin-dalis-uzmanligi
      this.courses[6].isVisible = false // dpv-uzmanligi
      this.courses[7].isVisible = false // kuru-elbise-uzmanligi
      this.courses[8].isVisible = false // buz-dalisi-uzmanligi
      this.courses[9].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = false // nitrox-uzmanligi
      this.courses[11].isVisible = false // sidemount-uzmanligi
      this.courses[12].isVisible = false // ilkyardim-uzmanligi
      this.courses[13].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = false // yon-bulma-uzmanligi
      this.courses[15].isVisible = false // zero-to-hero-egitimi
      this.courses[16].isVisible = true // serbest-dalis-egitimi
      this.courses[17].isVisible = false // engelli-dalici-egitimi
      this.courses[18].isVisible = false // engelli-dalici-egitmen-asistani
    },
    showSpecialProgram () {
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = true // modifiye-dalici
      this.courses[4].isVisible = false // batik-dalisi-uzmanligi
      this.courses[5].isVisible = false // derin-dalis-uzmanligi
      this.courses[6].isVisible = false // dpv-uzmanligi
      this.courses[7].isVisible = false // kuru-elbise-uzmanligi
      this.courses[8].isVisible = false // buz-dalisi-uzmanligi
      this.courses[9].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = false // nitrox-uzmanligi
      this.courses[11].isVisible = false // sidemount-uzmanligi
      this.courses[12].isVisible = false // ilkyardim-uzmanligi
      this.courses[13].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = false // yon-bulma-uzmanligi
      this.courses[15].isVisible = true // zero-to-hero-egitimi
      this.courses[16].isVisible = false // serbest-dalis-egitimi
      this.courses[17].isVisible = false // engelli-dalici-egitimi
      this.courses[18].isVisible = false // engelli-dalici-egitmen-asistani
    },
    showAllCourses () {
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = true // modifiye-dalici
      this.courses[4].isVisible = true // batik-dalisi-uzmanligi
      this.courses[5].isVisible = true // derin-dalis-uzmanligi
      this.courses[6].isVisible = true // dpv-uzmanligi
      this.courses[7].isVisible = true // kuru-elbise-uzmanligi
      this.courses[8].isVisible = true // buz-dalisi-uzmanligi
      this.courses[9].isVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[10].isVisible = true // nitrox-uzmanligi
      this.courses[11].isVisible = true // sidemount-uzmanligi
      this.courses[12].isVisible = true // ilkyardim-uzmanligi
      this.courses[13].isVisible = true // tanitim-dalisi-uzmanligi
      this.courses[14].isVisible = true // yon-bulma-uzmanligi
      this.courses[15].isVisible = true // zero-to-hero-egitimi
      this.courses[16].isVisible = true // serbest-dalis-egitimi
      this.courses[17].isVisible = true // engelli-dalici-egitimi
      this.courses[18].isVisible = true // engelli-dalici-egitmen-asistani
    }
  }
}
</script>

<style lang="sass" src="./Courses.sass" scoped></style>
