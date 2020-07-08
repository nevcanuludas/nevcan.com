<template lang="pug" src="./Certificates.pug"></template>

<script>
import jsonCertificateCategories from './CertificateCategories.json'
import jsonCertificateList from './CertificateList.json'

import AppInstructorLevel from './InstructorLevel'
import AppPersonalEvolution from './PersonalEvolution'

export default {
  name: 'Certificates',
  data () {
    return {
      sectionTitle: 'Brövelerim',
      sectionTitleEN: 'Certificates',
      isListView: false,
      isActiveTab: 'grid',
      certificateCategories: jsonCertificateCategories,
      certificateList: jsonCertificateList
    }
  },
  components: {
    'app-instructor-level': AppInstructorLevel,
    'app-personal-evolution': AppPersonalEvolution
  },
  methods: {
    switchToListView () {
      this.isListView = true
      this.isActiveTab = 'list'
    },
    switchToGridView () {
      this.isListView = false
      this.isActiveTab = 'grid'
    }
  }
}
</script>

<style lang="sass" src="./Certificates.sass" scoped></style>
