<template lang="pug" src="./ScheduledClasses.pug"></template>

<script>
export default {
  name: 'ScheduledClasses',
  data () {
    return {
      sectionTitle: 'Programlanmış Eğitimler',
      trips: [
        {date: '23.04.2018', name: 'Serbest Dalış Eğitimi (Lv1)', location: 'İbrice', status: 'Beklemede'},
        {date: '30.04.2018', name: '1* Dalıcı Eğitimi', location: 'Enez', status: 'Dolu'},
        {date: '07.05.2018', name: 'Sidemount Eğitimi', location: 'Sivas', status: 'Katılımcı (2/4)'},
        {date: '15.05.2018', name: 'Eğitmen Eğitimi', location: 'İstanbul', status: 'Beklemede'},
        {date: '14.05.2018', name: 'Nitrox Eğitimi', location: 'Antalya', status: 'Katılımcı (1/4)'}
      ]
    }
  }
}
</script>

<style lang="sass" src="./ScheduledClasses.sass" scoped></style>
