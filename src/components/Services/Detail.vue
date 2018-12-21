<template lang='pug' src='./Detail.pug'></template>

<script>
import jsonServiceDetails from './ServiceDetails.json'
import EURTRY from './convert-static.json'
// import EURTRY from 'http://free.currencyconverterapi.com/api/v5/convert?q=EUR_TRY&compact=y'

export default {
  name: 'ServiceDetails',
  data () {
    return {
      path: this.$route.params.id,
      isVisible: false,
      currency_eur_try: Math.round(EURTRY.EUR_TRY.val),
      serviceTitle: '',
      servicePrice: 'Hizmet bedeli belirtilmemiştir. Teklif almak için lütfen iletişime geçin.',
      serviceNote: '',
      serviceImages: '',
      serviceScope: '',
      serviceHasPadiClass: false,
      servicePrerequisites: '',
      serviceIncludes: '',
      serviceNotIncluded: 'Ulaşım, konaklama, yeme-içme ve kişisel harcamalar hizmet bedeline dahil değildir.',
      serviceQuota: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'deneme-dalisi': 0,
        'tazeleme-dalisi': 1,
        'gelisim-dalisi': 2,
        'egitmen-hazirlik': 3,
        'gue-hazirlik': 4,
        'fotograf-cekimi': 5,
        'kurumsal-danismanlik': 6
      },
      // Service Details JSON
      services: jsonServiceDetails
    }
  },
  created () {
    var s = this.services[this.dict[this.path]]
    this.serviceTitle = s.title
    s.price && (this.servicePrice = 'Hizmet bedeli ' + s.price * this.currency_eur_try + "₺'dır.")
    this.serviceNote = s.note
    this.serviceScope = s.scope
    this.serviceHasPadiClass = s.hasPadiClasses
    this.serviceImages = s.images
    this.servicePrerequisites = s.prerequisites
    this.serviceIncludes = s.includes
    this.serviceQuota = s.quota
  },
  methods: {
    visible () {
      this.isVisible = true
    }
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
