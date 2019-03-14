<template lang="pug" src="./Services.pug"></template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      sectionTitle: 'Verdiğim Hizmetler',
      services: [
        { id: 'deneme-dalisi', imageUrl: 'dsd', name: 'Deneme Dalışı' },
        { id: 'tazeleme-dalisi', imageUrl: 'refresh', name: 'Tazeleme Dalışı' },
        { id: 'gelisim-dalisi', imageUrl: 'improvement', name: 'Gelişim Dalışı' },
        { id: 'egitmen-hazirlik', imageUrl: 'beinginstructor', name: 'Eğitmenlik Kursuna Hazırlık' },
        { id: 'gue-hazirlik', imageUrl: 'beinggue', name: 'GUE Kursuna Hazırlık' },
        { id: 'fotograf-cekimi', imageUrl: 'photography', name: 'Sualtı Fotoğraf Çekimi' },
        { id: 'kurumsal-danismanlik', imageUrl: 'consulting', name: 'Kurumsal Danışmanlık' },
        { id: 'arama-kurtarma', imageUrl: 'sar', name: 'Arama ve Kurtarma' }
      ]
    }
  }
}
</script>

<style lang="sass" src="./Services.sass" scoped></style>
