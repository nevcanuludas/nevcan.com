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
        'yayakarsa': 1,
        'diver-safety-guardian': 2,
        'sualti-kultur-mirasinin-korunmasi': 3,
        'suluin-magarasi': 4,
        'deniz-kiyi-plaj-temizligi': 5,
        'saros-sualti-muzesi': 6,
        'photogrammetry-dpv': 7
      },
      // Conservations JSON
      conservations: [
        {
          title: 'Project Baseline: Marmara',
          scope: 'Marmara bölgesi boyunca su koşulları ve denizanası sayılarını takip ediyoruz. Bu sayede zaman içerisinde gidişatı daha iyi görebileceğiz. Saros körfezinde ve İzmit körfezinde kurduğumuz iki farklı istasyon verileri toplamaya başladı bile. Sizde farkındalık sahibi bir dalıcı olarak bu projede bize destek olabilirsiniz.',
          url: 'https://www.youtube-nocookie.com/embed/33FXnjxEPVc'
        },
        {
          title: 'Ya Yakarsa',
          scope: '',
          url: ''
        },
        {
          title: 'DAN Dalış Bağışı',
          scope: 'Dalış sonrası dalıcılarda oluşan sessiz kabarcıkların doppler ölçümü ile dinlendikten sonra, insan vücudu üzerindeki etkilerinin incelenmesi için ortak bir veritabanında toplanmasına yönelik yapılan bir yurttaş bilimidir.',
          url: 'https://www.youtube-nocookie.com/embed/iFxiGp8gNIY'
        },
        {
          title: 'Sualtı Kültür Mirasının Korunması',
          scope: 'Tarihin şekillenmesine yardımcı oluyoruz. Bulduğumuz kültür miraslarını arkeologlar ile paylaşıyoruz.',
          url: 'https://www.youtube-nocookie.com/embed/whhoMdZUcIs'
        },
        {
          title: 'Suluin Mağarası',
          scope: '1998 yılında JJ ve ekibinin 120 metreye kadar keşfettiği, aysa kıtasının en derin mağarası olan suluin mağarasında araştırma dalaışlarına devam ediyoruz. Amacımız, deniz ile bağlantısını ve dibini bulabilmek.',
          url: 'https://www.youtube-nocookie.com/embed/NjX3O-RN3-8'
        },
        {
          title: 'Deniz, Kıyı ve Plaj Temizliği',
          scope: '',
          url: 'https://www.youtube-nocookie.com/embed/CVf_vbrc0to'
        },
        {
          title: 'Saros Sualtı Müzesi',
          scope: '',
          url: 'https://www.youtube-nocookie.com/embed/5BS3LHkt9hY'
        },
        {
          title: 'Photogrammetry Yöntemi ile 3D Modelleme',
          scope: '',
          url: 'https://www.youtube-nocookie.com/embed/D0UCWftL2ZI'
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
