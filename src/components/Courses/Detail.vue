<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'CourseDetails',
  data () {
    return {
      id: this.$route.params.id,
      course: {}
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
      console.log(data)
      this.course = data.body
    })
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
