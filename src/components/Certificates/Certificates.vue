<template lang="pug" src="./Certificates.pug"></template>

<script>
import AppInstructorLevel from './InstructorLevel'
import AppPersonalEvolution from './PersonalEvolution'

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
  },
  components: {
    'app-instructor-level': AppInstructorLevel,
    'app-personal-evolution': AppPersonalEvolution
  }
}
</script>

<style lang="sass" src="./Certificates.sass" scoped></style>
