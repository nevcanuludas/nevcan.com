<template lang="pug" src="./MainMenu.pug"></template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
      if (this.isActive) {
        console.log('Menü Aktif')
      }
    },
    consoleLog () {
      var val = document.getElementById('esc').value
      console.log(val)
      val = ''
    },
    getFocus () {
      document.getElementById('esc').focus()
    }
  }
}
</script>

<style lang="sass" src="./MainMenu.sass" scoped></style>
