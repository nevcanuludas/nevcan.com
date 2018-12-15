<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'ConservationDetails',
  data () {
    return {
      path: this.$route.params.id,
      conservationTitle: '',
      conservationScope: '',
      conservationUrl: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'pb-marmara': 0,
        'diver-safety-guardian': 1,
        'sualti-kultur-mirasinin-korunmasi': 2,
        'suluin-magarasi': 3
      },
      // Conservations JSON
      conservations: [
        {
          title: 'Project Baseline: Marmara',
          scope: 'Marmara bölgesi boyunca su koşulları ve denizanası sayılarını takip ediyoruz. Bu sayede zaman içerisinde gidişatı daha iyi görebileceğiz. Saros körfezinde ve İzmit körfezinde kurduğumuz iki farklı istasyon verileri toplamaya başladı bile. Sizde farkındalık sahibi bir dalıcı olarak bu projede bize destek olabilirsiniz.',
          url: 'https://www.youtube-nocookie.com/embed/33FXnjxEPVc'
        },
        {
          title: 'DAN Dalış Bağışı',
          scope: 'Dalıcıların Dopler ölçümü ile kabarcıklarının ortak bir database de toplanması işlemi.',
          url: 'https://youtu.be/iFxiGp8gNIY'
        },
        {
          title: 'Sualtı Kültür Mirasının Korunması',
          scope: 'Tarihin şekillenmesine yardımcı oluyoruz. Bulduğumuz Kültür Miraslarını arkeologlar ile paylaşıyoruz.',
          url: 'https://youtu.be/whhoMdZUcIs'
        },
        {
          title: 'Suluin Mağarası',
          scope: '1998 yılında JJ ve ekibinin 120 metreye kadar keşfettiği, aysa kıtasının en derin mağarası olan suluin mağarasında araştırma dalaışlarına devam ediyoruz. Amacımız, deniz ile bağlantısını ve dibini bulabilmek.'
        }
      ]
    }
  },
  created () {
    var c = this.conservations[this.dict[this.path]]
    this.conservationTitle = c.title
    this.conservationScope = c.scope
    this.conservationUrl = c.url
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
