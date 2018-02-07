<template lang="pug">
#app
  app-sidebar
  main.content
    // router-view
    app-about-me
    app-certificates
    app-courses
    app-services
    app-contact
    app-footer
  app-footer-mobile-message
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
