<template lang="pug" src="./Footer.pug"></template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      locale: 'tr',
      footer: {
        'tr': {
          'copyright': 'Copyright © 1987 - Tüm Hakları Saklıdır.<br>GUE Türkiye | TSSF/CMAS Dalış Eğitmeni | PROTEC Türkiye | ILS/TSSF Cankurtaran<br>Sportif Dalış | Teknik Dalış | Mağara Dalışı | Serbest Dalış'
        },
        'en': {
          'copyright': 'Copyright © 1987 - All Rights Reserved.<br>GUE Turkey | TSSF/CMAS Diving Instructor | PROTEC Turkey | ILS/TSSF Lifeguard<br>Scuba Diving | Technical Diving | Cave Diving | Freediving'
        }
      }
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<style lang="sass" src="./Footer.sass" scoped></style>
