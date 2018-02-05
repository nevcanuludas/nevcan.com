<template lang="pug">
#app.container-flueid
  app-sidebar
  main.content
    router-view
    app-about-me
    app-footer
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
