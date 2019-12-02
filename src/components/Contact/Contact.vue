<template lang="pug" src="./Contact.pug"></template>

<script>
import AppForm from './Form.vue'

export default {
  name: 'Contact',
  data () {
    return {
      sectionTitle: 'İletişim',
      sectionTitleEN: 'Contact',
      isVisible: false
    }
  },
  components: {
    'app-form': AppForm
  },
  methods: {
    makeVisible () {
      this.isVisible = true
    },
    formSubmit (e) {
      alert('Form Submited')
      e.preventDefault()
    }
  }
}
</script>

<style lang="sass" src="./Contact.sass" scoped></style>
