<template>
  <div id="app">
    <app-sidebar></app-sidebar>
    <main class="content">
      <img src="./assets/logo.png">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" src="./styles/style.sass"></style>
