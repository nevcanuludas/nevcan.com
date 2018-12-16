<template lang="pug" src="./Sidebar.pug"></template>

<script>
export default {
  data () {
    return {
      locale: 'tr',
      'en': {
        'message': 'English',
        'title': 'Scuba Instructor'
      },
      'tr': {
        'message': 'Türkçe',
        'title': 'Dalış Eğitmeni'
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

<style lang="sass" src="./Sidebar.sass" scoped></style>
