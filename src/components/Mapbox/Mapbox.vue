
<template lang="pug" src="./Mapbox.pug"></template>

<script>
import VueMapboxMap from 'vue-mapbox-map'

export default {
  name: 'Mapbox',
  data () {
    return {
      scene: {
        accessToken: 'pk.eyJ1IjoibmV2Y2FudWx1ZGFzIiwiYSI6ImNqbnp1ejNocTBiMGwzdm1xNzVpejU0NG0ifQ.JJli50htD35CtZl-TW1twQ',
        lng: 28.976420,
        lat: 40.994360,
        zoom: 9,
        pitch: 20,
        bearing: 0
      }
    }
  },
  methods: {
    setMap (map) {
      this.map = map
    }
  },
  components: { VueMapboxMap }
}
</script>

<style lang="sass" src="./Mapbox.sass" scoped></style>
