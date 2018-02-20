<template lang="pug" src="./Contact.pug"></template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      sectionTitle: 'İletişim',
      isVisible: false
    }
  },
  methods: {
    visible () {
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
