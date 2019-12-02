<template lang="pug" src="./AboutMe.pug"></template>

<script>
// Local Components Import
import AppCareerList from './CareerList'
import AppCompanyList from './CompanyList'

export default {
  name: 'AboutMe',
  data () {
    return {
      sectionTitle: 'Hakkımda',
      sectionTitleEN: 'About Me'
    }
  },
  components: {
    'app-career-list': AppCareerList,
    'app-company-list': AppCompanyList
  }
}
</script>

<style lang="sass" src="./AboutMe.sass" scoped></style>
