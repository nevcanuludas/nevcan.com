<template lang="pug">
#app.container-flueid
  app-sidebar
  main.content
    // router-view
    app-about-me
    app-certificates
    app-courses
    app-footer
  app-footer-mobile-message
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
