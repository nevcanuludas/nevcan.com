<template lang="pug" src="./Courses.pug"></template>

<script>
export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      courses: [
        { id: '1-yildiz-dalici', imageUrl: '1star', name: '1* Dalıcı' },
        { id: '2-yildiz-dalici', imageUrl: '2star', name: '2* Dalıcı' },
        { id: '3-yildiz-dalici', imageUrl: '3star', name: '3* Dalıcı' },
        { id: 'modifiye-dalici', imageUrl: 'modified', name: 'Modifiye Dalıcı' },
        { id: 'batik-dalisi-uzmanligi', imageUrl: 'wreck', name: 'Batık Dalışı' },
        { id: 'derin-dalis-uzmanligi', imageUrl: 'deep', name: 'Derin Dalış' },
        { id: 'dpv-uzmanligi', imageUrl: 'dpv', name: 'DPV' },
        { id: 'kuru-elbise-uzmanligi', imageUrl: 'drysuit', name: 'Kuru Elbise' },
        { id: 'buz-dalisi-uzmanligi', imageUrl: 'ice', name: 'Buz Dalışı' },
        { id: 'magara-kesif-dalisi-uzmanligi', imageUrl: 'dcd', name: 'Mağara Dalışı' },
        { id: 'nitrox-uzmanligi', imageUrl: 'nitrox', name: 'Nitrox' },
        { id: 'sidemount-uzmanligi', imageUrl: 'sidemount', name: 'Sidemount' },
        { id: 'ilkyardim-uzmanligi', imageUrl: 'firstaid', name: 'İlkyardım' },
        { id: 'tanitim-dalisi-uzmanligi', imageUrl: 'dsd', name: 'Tanıtım Dalışı' },
        { id: 'yon-bulma-uzmanligi', imageUrl: 'navigation', name: 'Yön Bulma' },
        { id: 'zero-to-hero-egitimi', imageUrl: 'zerotohero', name: 'Zero to Hero' },
        { id: 'serbest-dalis-egitimi', imageUrl: 'freediving', name: 'Serbest Dalış' },
        { id: 'engelli-dalici-egitimi', imageUrl: 'handicap', name: 'Engelli Dalıcı' },
        { id: 'engelli-dalici-egitmen-asistani', imageUrl: 'edea', name: 'Engelli Dalıcı Eğitmen Asistanı' }
      ]
    }
  }
}
</script>

<style lang="sass" src="./Courses.sass" scoped></style>
