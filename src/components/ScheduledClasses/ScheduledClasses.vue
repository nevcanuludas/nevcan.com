<template lang="pug" src="./ScheduledClasses.pug"></template>

<script>
import ScheduledClassesJson from './ScheduledClasses.json'

export default {
  name: 'ScheduledClasses',
  data () {
    return {
      sectionTitle: 'Programlanmış Eğitimler',
      trips: ScheduledClassesJson
    }
  },
  mounted: function () {
    var currentDate = new Date()

    for (var i = 0; i < this.trips.length; i++) {
      var startDate = new Date(this.trips[i].startDate)
      var status = this.trips[i].status

      if (startDate <= currentDate) {
        console.log(this.trips[i].name + ' ' + this.trips[i].date + ' tarihinde yapılmıştır.')
        this.trips.shift()
        i = -1
      } else {
        if (status === 'Dolu') {
          this.trips[i].class = 'card-outline-danger'
        } else if (status === 'Beklemede') {
          this.trips[i].class = 'card-outline-secondary'
        } else {
          this.trips[i].class = 'card-outline-success'
        }
      }
    }
  }
}
</script>

<style lang="sass" src="./ScheduledClasses.sass" scoped></style>
