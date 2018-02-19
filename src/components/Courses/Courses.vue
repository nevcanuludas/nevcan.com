<template lang="pug" src="./Courses.pug"></template>

<script>
export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      courses: [
        { id: '1', imageUrl: '1star', name: '1* Dalıcı' },
        { id: '2', imageUrl: '2star', name: '2* Dalıcı' },
        { id: '3', imageUrl: '3star', name: '3* Dalıcı' },
        { id: '4', imageUrl: 'modified', name: 'Modifiye Dalıcı' },
        { id: '5', imageUrl: 'wreck', name: 'Batık' },
        { id: '6', imageUrl: 'dpv', name: 'DPV' },
        { id: '7', imageUrl: 'drysuit', name: 'Kuru Elbise' },
        { id: '8', imageUrl: 'ice', name: 'Buz Dalışı' },
        { id: '9', imageUrl: 'dcd', name: 'Mağara Dalışı' },
        { id: '10', imageUrl: 'nitrox', name: 'Nitrox' },
        { id: '11', imageUrl: 'sidemount', name: 'Sidemount' },
        { id: '12', imageUrl: 'zerotohero', name: 'Zero to Hero' },
        { id: '13', imageUrl: 'freediving', name: 'Serbest Dalış' },
        { id: '14', imageUrl: 'handicap', name: 'Engelli Dalıcı' }
      ]
    }
  }
}
</script>

<style lang="sass" src="./Courses.sass" scoped></style>
