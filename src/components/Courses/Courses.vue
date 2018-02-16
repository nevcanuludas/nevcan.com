<template lang="pug" src="./Courses.pug"></template>

<script>
export default {
  name: 'Courses',
  data () {
    return {
      sectionTitle: 'Verdiğim Eğitimler',
      imageUrl: '1star',
      courses: [
        {link: '#', imageUrl: '1star', name: '1* Dalıcı'},
        {link: '#', imageUrl: '2star', name: '2* Dalıcı'},
        {link: '#', imageUrl: '3star', name: '3* Dalıcı'},
        {link: '#', imageUrl: 'modified', name: 'Modifiye Dalıcı'},
        {link: '#', imageUrl: 'wreck', name: 'Batık'},
        {link: '#', imageUrl: 'dpv', name: 'DPV'},
        {link: '#', imageUrl: 'drysuit', name: 'Kuru Elbise'},
        {link: '#', imageUrl: 'ice', name: 'Buz Dalışı'},
        {link: '#', imageUrl: 'dcd', name: 'Mağara Dalışı'},
        {link: '#', imageUrl: 'nitrox', name: 'Nitrox'},
        {link: '#', imageUrl: 'sidemount', name: 'Sidemount'},
        {link: '#', imageUrl: 'zerotohero', name: 'Zero to Hero'},
        {link: '#', imageUrl: 'freediving', name: 'Serbest Dalış'},
        {link: '#', imageUrl: 'handicap', name: 'Engelli Dalıcı'}
      ]
    }
  },
  computed: {
    imagePath () {
      return require('../../assets/courses/list/' + this.imageUrl + '.jpg')
    }
  }
}
</script>

<style lang="sass" src="./Courses.sass" scoped></style>
