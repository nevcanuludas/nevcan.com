<template lang="pug" src="./Courses.pug"></template>

<script>
import jsonCourses from './Courses.json'

export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      courses: jsonCourses,
      isActiveTab: 'allCompanies',
      isActiveFilter: 'allCourses'
    }
  },
  methods: {
    showAllCompanies () {
      this.courses[0].isCompanyVisible = true // 1-yildiz-dalici
      this.courses[1].isCompanyVisible = true // 2-yildiz-dalici
      this.courses[2].isCompanyVisible = true // 3-yildiz-dalici
      this.courses[3].isCompanyVisible = true // modifiye-dalici
      this.courses[4].isCompanyVisible = true // akinti-dalisi-uzmanligi
      this.courses[5].isCompanyVisible = true // arama-ve-kurtarma-uzmanligi
      this.courses[6].isCompanyVisible = true // batik-dalisi-uzmanligi
      this.courses[7].isCompanyVisible = true // buz-dalisi-uzmanligi
      this.courses[8].isCompanyVisible = true // derin-dalis-uzmanligi
      this.courses[9].isCompanyVisible = true // dpv-uzmanligi
      this.courses[10].isCompanyVisible = true // gece-dalisi-uzmanligi
      this.courses[11].isCompanyVisible = true // ilkyardim-uzmanligi
      this.courses[12].isCompanyVisible = true // irtifa-dalisi-uzmanligi
      this.courses[13].isCompanyVisible = true // kovuk-dalisi-uzmanligi
      this.courses[14].isCompanyVisible = true // kuru-elbise-uzmanligi
      this.courses[15].isCompanyVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[16].isCompanyVisible = true // malzeme-bakimi-uzmanligi
      this.courses[17].isCompanyVisible = true // nitrox-uzmanligi
      this.courses[18].isCompanyVisible = true // oksijen-kullanimi-uzmanligi
      this.courses[19].isCompanyVisible = true // sidemount-uzmanligi
      this.courses[20].isCompanyVisible = true // sualti-fotografcisi-uzmanligi
      this.courses[21].isCompanyVisible = true // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isCompanyVisible = true // sualti-videocusu-uzmanligi
      this.courses[23].isCompanyVisible = true // tanitim-dalisi-uzmanligi
      this.courses[24].isCompanyVisible = true // tup-doldurma-uzmanligi
      this.courses[25].isCompanyVisible = true // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isCompanyVisible = true // yon-bulma-uzmanligi
      this.courses[27].isCompanyVisible = true // zero-to-hero-egitimi
      this.courses[28].isCompanyVisible = true // serbest-dalis-egitimi
      this.courses[29].isCompanyVisible = true // engelli-dalici-1-egitimi
      this.courses[30].isCompanyVisible = true // engelli-dalici-2-egitimi
      this.courses[31].isCompanyVisible = true // engelli-dalici-3-egitimi
      this.courses[32].isCompanyVisible = true // engelli-dalici-egitmen-asistani
      this.isActiveTab = 'allCompanies'
    },
    showGue () {
      this.courses[0].isCompanyVisible = false // 1-yildiz-dalici
      this.courses[1].isCompanyVisible = false // 2-yildiz-dalici
      this.courses[2].isCompanyVisible = false // 3-yildiz-dalici
      this.courses[3].isCompanyVisible = false // modifiye-dalici
      this.courses[4].isCompanyVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isCompanyVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isCompanyVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isCompanyVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isCompanyVisible = false // derin-dalis-uzmanligi
      this.courses[9].isCompanyVisible = false // dpv-uzmanligi
      this.courses[10].isCompanyVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isCompanyVisible = false // ilkyardim-uzmanligi
      this.courses[12].isCompanyVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isCompanyVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isCompanyVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isCompanyVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isCompanyVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isCompanyVisible = false // nitrox-uzmanligi
      this.courses[18].isCompanyVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isCompanyVisible = false // sidemount-uzmanligi
      this.courses[20].isCompanyVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isCompanyVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isCompanyVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isCompanyVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isCompanyVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isCompanyVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isCompanyVisible = false // yon-bulma-uzmanligi
      this.courses[27].isCompanyVisible = false // zero-to-hero-egitimi
      this.courses[28].isCompanyVisible = false // serbest-dalis-egitimi
      this.courses[29].isCompanyVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isCompanyVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isCompanyVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isCompanyVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveTab = 'gue'
    },
    showTssf () {
      this.courses[0].isCompanyVisible = true // 1-yildiz-dalici
      this.courses[1].isCompanyVisible = true // 2-yildiz-dalici
      this.courses[2].isCompanyVisible = true // 3-yildiz-dalici
      this.courses[3].isCompanyVisible = false // modifiye-dalici
      this.courses[4].isCompanyVisible = true // akinti-dalisi-uzmanligi
      this.courses[5].isCompanyVisible = true // arama-ve-kurtarma-uzmanligi
      this.courses[6].isCompanyVisible = true // batik-dalisi-uzmanligi
      this.courses[7].isCompanyVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isCompanyVisible = true // derin-dalis-uzmanligi
      this.courses[9].isCompanyVisible = false // dpv-uzmanligi
      this.courses[10].isCompanyVisible = true // gece-dalisi-uzmanligi
      this.courses[11].isCompanyVisible = true // ilkyardim-uzmanligi
      this.courses[12].isCompanyVisible = true // irtifa-dalisi-uzmanligi
      this.courses[13].isCompanyVisible = true // kovuk-dalisi-uzmanligi
      this.courses[14].isCompanyVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isCompanyVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isCompanyVisible = true // malzeme-bakimi-uzmanligi
      this.courses[17].isCompanyVisible = true // nitrox-uzmanligi
      this.courses[18].isCompanyVisible = true // oksijen-kullanimi-uzmanligi
      this.courses[19].isCompanyVisible = false // sidemount-uzmanligi
      this.courses[20].isCompanyVisible = true // sualti-fotografcisi-uzmanligi
      this.courses[21].isCompanyVisible = true // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isCompanyVisible = true // sualti-videocusu-uzmanligi
      this.courses[23].isCompanyVisible = true // tanitim-dalisi-uzmanligi
      this.courses[24].isCompanyVisible = true // tup-doldurma-uzmanligi
      this.courses[25].isCompanyVisible = true // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isCompanyVisible = true // yon-bulma-uzmanligi
      this.courses[27].isCompanyVisible = false // zero-to-hero-egitimi
      this.courses[28].isCompanyVisible = false // serbest-dalis-egitimi
      this.courses[29].isCompanyVisible = true // engelli-dalici-1-egitimi
      this.courses[30].isCompanyVisible = true // engelli-dalici-2-egitimi
      this.courses[31].isCompanyVisible = true // engelli-dalici-3-egitimi
      this.courses[32].isCompanyVisible = true // engelli-dalici-egitmen-asistani
      this.isActiveTab = 'tssf'
    },
    showNsc () {
      this.courses[0].isCompanyVisible = false // 1-yildiz-dalici
      this.courses[1].isCompanyVisible = false // 2-yildiz-dalici
      this.courses[2].isCompanyVisible = false // 3-yildiz-dalici
      this.courses[3].isCompanyVisible = false // modifiye-dalici
      this.courses[4].isCompanyVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isCompanyVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isCompanyVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isCompanyVisible = true // buz-dalisi-uzmanligi
      this.courses[8].isCompanyVisible = false // derin-dalis-uzmanligi
      this.courses[9].isCompanyVisible = true // dpv-uzmanligi
      this.courses[10].isCompanyVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isCompanyVisible = false // ilkyardim-uzmanligi
      this.courses[12].isCompanyVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isCompanyVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isCompanyVisible = true // kuru-elbise-uzmanligi
      this.courses[15].isCompanyVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[16].isCompanyVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isCompanyVisible = false // nitrox-uzmanligi
      this.courses[18].isCompanyVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isCompanyVisible = true // sidemount-uzmanligi
      this.courses[20].isCompanyVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isCompanyVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isCompanyVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isCompanyVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isCompanyVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isCompanyVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isCompanyVisible = false // yon-bulma-uzmanligi
      this.courses[27].isCompanyVisible = false // zero-to-hero-egitimi
      this.courses[28].isCompanyVisible = true // serbest-dalis-egitimi
      this.courses[29].isCompanyVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isCompanyVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isCompanyVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isCompanyVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveTab = 'nsc'
    },
    showScuba () {
      this.showTssf()
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isVisible = false // derin-dalis-uzmanligi
      this.courses[9].isVisible = false // dpv-uzmanligi
      this.courses[10].isVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isVisible = false // ilkyardim-uzmanligi
      this.courses[12].isVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = false // nitrox-uzmanligi
      this.courses[18].isVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = false // sidemount-uzmanligi
      this.courses[20].isVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = false // yon-bulma-uzmanligi
      this.courses[27].isVisible = false // zero-to-hero-egitimi
      this.courses[28].isVisible = false // serbest-dalis-egitimi
      this.courses[29].isVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'diver'
    },
    showSpecialty () {
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = true // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = true // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = true // batik-dalisi-uzmanligi
      this.courses[7].isVisible = true // buz-dalisi-uzmanligi
      this.courses[8].isVisible = true // derin-dalis-uzmanligi
      this.courses[9].isVisible = true // dpv-uzmanligi
      this.courses[10].isVisible = true // gece-dalisi-uzmanligi
      this.courses[11].isVisible = true // ilkyardim-uzmanligi
      this.courses[12].isVisible = true // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = true // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = true // kuru-elbise-uzmanligi
      this.courses[15].isVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = true // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = true // nitrox-uzmanligi
      this.courses[18].isVisible = true // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = true // sidemount-uzmanligi
      this.courses[20].isVisible = true // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = true // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = true // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = true // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = true // tup-doldurma-uzmanligi
      this.courses[25].isVisible = true // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = true // yon-bulma-uzmanligi
      this.courses[27].isVisible = false // zero-to-hero-egitimi
      this.courses[28].isVisible = false // serbest-dalis-egitimi
      this.courses[29].isVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'specialty'
    },
    showDisabled () {
      this.showTssf()
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isVisible = false // derin-dalis-uzmanligi
      this.courses[9].isVisible = false // dpv-uzmanligi
      this.courses[10].isVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isVisible = false // ilkyardim-uzmanligi
      this.courses[12].isVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = false // nitrox-uzmanligi
      this.courses[18].isVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = false // sidemount-uzmanligi
      this.courses[20].isVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = false // yon-bulma-uzmanligi
      this.courses[27].isVisible = false // zero-to-hero-egitimi
      this.courses[28].isVisible = false // serbest-dalis-egitimi
      this.courses[29].isVisible = true // engelli-dalici-1-egitimi
      this.courses[30].isVisible = true // engelli-dalici-2-egitimi
      this.courses[31].isVisible = true // engelli-dalici-3-egitimi
      this.courses[32].isVisible = true // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'disabled'
    },
    showFree () {
      this.showNsc()
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = false // modifiye-dalici
      this.courses[4].isVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isVisible = false // derin-dalis-uzmanligi
      this.courses[9].isVisible = false // dpv-uzmanligi
      this.courses[10].isVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isVisible = false // ilkyardim-uzmanligi
      this.courses[12].isVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = false // nitrox-uzmanligi
      this.courses[18].isVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = false // sidemount-uzmanligi
      this.courses[20].isVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = false // yon-bulma-uzmanligi
      this.courses[27].isVisible = false // zero-to-hero-egitimi
      this.courses[28].isVisible = true // serbest-dalis-egitimi
      this.courses[29].isVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'free'
    },
    showSpecialProgram () {
      this.showAllCompanies()
      this.courses[0].isVisible = false // 1-yildiz-dalici
      this.courses[1].isVisible = false // 2-yildiz-dalici
      this.courses[2].isVisible = false // 3-yildiz-dalici
      this.courses[3].isVisible = true // modifiye-dalici
      this.courses[4].isVisible = false // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = false // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = false // batik-dalisi-uzmanligi
      this.courses[7].isVisible = false // buz-dalisi-uzmanligi
      this.courses[8].isVisible = false // derin-dalis-uzmanligi
      this.courses[9].isVisible = false // dpv-uzmanligi
      this.courses[10].isVisible = false // gece-dalisi-uzmanligi
      this.courses[11].isVisible = false // ilkyardim-uzmanligi
      this.courses[12].isVisible = false // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = false // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = false // kuru-elbise-uzmanligi
      this.courses[15].isVisible = false // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = false // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = false // nitrox-uzmanligi
      this.courses[18].isVisible = false // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = false // sidemount-uzmanligi
      this.courses[20].isVisible = false // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = false // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = false // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = false // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = false // tup-doldurma-uzmanligi
      this.courses[25].isVisible = false // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = false // yon-bulma-uzmanligi
      this.courses[27].isVisible = true // zero-to-hero-egitimi
      this.courses[28].isVisible = false // serbest-dalis-egitimi
      this.courses[29].isVisible = false // engelli-dalici-1-egitimi
      this.courses[30].isVisible = false // engelli-dalici-2-egitimi
      this.courses[31].isVisible = false // engelli-dalici-3-egitimi
      this.courses[32].isVisible = false // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'special'
    },
    showAllCourses () {
      this.courses[0].isVisible = true // 1-yildiz-dalici
      this.courses[1].isVisible = true // 2-yildiz-dalici
      this.courses[2].isVisible = true // 3-yildiz-dalici
      this.courses[3].isVisible = true // modifiye-dalici
      this.courses[4].isVisible = true // akinti-dalisi-uzmanligi
      this.courses[5].isVisible = true // arama-ve-kurtarma-uzmanligi
      this.courses[6].isVisible = true // batik-dalisi-uzmanligi
      this.courses[7].isVisible = true // buz-dalisi-uzmanligi
      this.courses[8].isVisible = true // derin-dalis-uzmanligi
      this.courses[9].isVisible = true // dpv-uzmanligi
      this.courses[10].isVisible = true // gece-dalisi-uzmanligi
      this.courses[11].isVisible = true // ilkyardim-uzmanligi
      this.courses[12].isVisible = true // irtifa-dalisi-uzmanligi
      this.courses[13].isVisible = true // kovuk-dalisi-uzmanligi
      this.courses[14].isVisible = true // kuru-elbise-uzmanligi
      this.courses[15].isVisible = true // magara-kesif-dalisi-uzmanligi
      this.courses[16].isVisible = true // malzeme-bakimi-uzmanligi
      this.courses[17].isVisible = true // nitrox-uzmanligi
      this.courses[18].isVisible = true // oksijen-kullanimi-uzmanligi
      this.courses[19].isVisible = true // sidemount-uzmanligi
      this.courses[20].isVisible = true // sualti-fotografcisi-uzmanligi
      this.courses[21].isVisible = true // sualti-kultur-mirasinin-korunması-uzmanligi
      this.courses[22].isVisible = true // sualti-videocusu-uzmanligi
      this.courses[23].isVisible = true // tanitim-dalisi-uzmanligi
      this.courses[24].isVisible = true // tup-doldurma-uzmanligi
      this.courses[25].isVisible = true // ust-duzey-yuzerlilik-uzmanligi
      this.courses[26].isVisible = true // yon-bulma-uzmanligi
      this.courses[27].isVisible = true // zero-to-hero-egitimi
      this.courses[28].isVisible = true // serbest-dalis-egitimi
      this.courses[29].isVisible = true // engelli-dalici-1-egitimi
      this.courses[30].isVisible = true // engelli-dalici-2-egitimi
      this.courses[31].isVisible = true // engelli-dalici-3-egitimi
      this.courses[32].isVisible = true // engelli-dalici-egitmen-asistani
      this.isActiveFilter = 'allCourses'
    }
  }
}
</script>

<style lang="sass" src="./Courses.sass" scoped></style>
