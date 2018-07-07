<template lang="pug" src="./ScheduledClasses.pug"></template>

<script>
export default {
  name: 'ScheduledClasses',
  data () {
    return {
      sectionTitle: 'Programlanmış Eğitimler',
      trips: [
        {startDate: new Date('2018-01-21'), date: '21.01.2018', name: 'A Eğitimi', url: '/courses/', location: 'Antalya', status: 'Kontenjan (1/4)', class: ''},
        {startDate: new Date('2018-02-26'), date: '26.02.2018', name: 'B Eğitimi', url: '/courses/', location: 'Antalya', status: 'Kontenjan (2/4)', class: ''},
        {startDate: new Date('2018-04-23'), date: '23.04.2018', name: 'Serbest Dalış Eğitimi (Lv1)', url: '/courses/serbest-dalis-egitimi', location: 'İbrice Limanı', status: 'Beklemede', class: ''},
        {startDate: new Date('2018-04-30'), date: '30.04.2018', name: '1* Dalıcı Eğitimi', url: '/courses/1-yildiz-dalici', location: 'Enez', status: 'Dolu', class: ''},
        {startDate: new Date('2018-05-07'), date: '07.05.2018', name: 'Sidemount Uzmanlığı Eğitimi', url: 'courses/sidemount-uzmanligi', location: 'Sivas', status: 'Kontenjan (2/4)', class: ''},
        {startDate: new Date('2018-05-14'), date: '14.05.2018', name: 'Nitrox Uzmanlığı Eğitimi', url: '/courses/nitrox-uzmanligi', location: 'Antalya', status: 'Kontenjan (1/8)', class: ''},
        {startDate: new Date('2018-05-15'), date: '15.05.2018', name: '1 ve 2 Yıldız Eğitmen Eğitimi', url: '/courses/', location: 'İstanbul', status: 'Dolu', class: ''},
        {startDate: new Date('2018-07-14'), date: '14.07.2018', name: '1 Yıldız Dalıcı Eğitimi', url: '/courses/1-yildiz-dalici', location: 'İbrice Limanı', status: 'Dolu', class: ''},
        {startDate: new Date('2018-07-21'), date: '21.07.2018', name: '1 Yıldız Dalıcı Eğitimi', url: '/courses/1-yildiz-dalici', location: 'İbrice Limanı', status: 'Dolu', class: ''},
        {startDate: new Date('2018-07-28'), date: '28.07.2018', name: 'Serbest Dalış Eğitimi', url: '/courses/serbest-dalis-egitimi', location: 'İstanbul', status: 'Kontenjan (3/4)', class: ''}
      ]
    }
  },
  mounted: function () {
    var currentDate = new Date()

    for (var i = 0; i < this.trips.length; i++) {
      var startDate = this.trips[i].startDate
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
