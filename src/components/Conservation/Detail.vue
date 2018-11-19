<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'ConservationDetails',
  data () {
    return {
      path: this.$route.params.id,
      conservationTitle: '',
      conservationScope: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'pb-marmara': 0,
        'dan-dalis-bagisi': 1,
        'sualti-kultur-mirasinin-korunmasi': 2,
        'suluin-magarasi': 3
      },
      // Conservations JSON
      conservations: [
        {
          title: 'Project Baseline: Marmara',
          scope: 'Marmara bölgesi boyunca su koşulları ve denizanası sayılarını takip ediyoruz. Bu sayede zaman içerisinde gidişatı daha iyi görebileceğiz. Saros körfezinde ve İzmit körfezinde kurduğumuz iki farklı istasyon verileri toplamaya başladı bile. Sizde farkındalık sahibi bir dalıcı olarak bu projede bize destek olabilirsiniz.'
        },
        {
          title: 'DAN Dalış Bağışı'
        },
        {
          title: 'Sualtı Kültür Mirasının Korunması'
        },
        {
          title: 'Suluin Mağarası'
        }
      ]
    }
  },
  created () {
    var c = this.conservations[this.dict[this.path]]
    this.conservationTitle = c.title
    this.conservationScope = c.scope
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
