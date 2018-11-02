<template lang="pug" src="./Certificates.pug"></template>

<script>
export default {
  name: 'Certificates',
  data () {
    return {
      sectionTitle: 'Brövelerim',
      certificates: [
        { id: 'gue', imageUrl: 'gue', name: 'GUE' },
        { id: 'tssf', imageUrl: 'tssf', name: 'TSSF/CMAS' },
        { id: 'protec', imageUrl: 'protec', name: 'ProTec' },
        { id: 'ssi', imageUrl: 'ssi', name: 'SSI' },
        { id: 'lifeguard', imageUrl: 'ils', name: 'Cankurtarma' },
        { id: 'others', imageUrl: 'poseidon', name: 'Diğer Belgeler' }
      ]
    }
  }
}
</script>

<style lang="sass" src="./Certificates.sass" scoped></style>
