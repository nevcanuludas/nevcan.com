<template lang="pug">
#app
  app-sidebar
  main.content
    img(src="./assets/logo.png")
    router-view
  app-footer
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
