<template lang="pug" src="./Courses.pug"></template>

<script>
import jsonCourses from './Courses.json'

export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      courses: jsonCourses
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
