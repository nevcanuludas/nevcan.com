<template lang="pug">
#app
  app-main-menu
  app-sidebar
  main.content
    router-view
    app-footer
  app-footer-mobile-message
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
