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
      conservationLink: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'pb-marmara': 0,
        'yayakarsa': 1,
        'diver-safety-guardian': 2,
        'sualti-kultur-mirasinin-korunmasi': 3,
        'karstdive-2020': 4,
        'deniz-kiyi-plaj-temizligi': 5,
        'saros-sualti-muzesi': 6,
        'photogrammetry': 7
      },
      // Conservations JSON
      conservations: [
        {
          title: 'Project Baseline: Marmara',
          scope: 'Marmara bölgesi boyunca su koşulları ve denizanası sayılarını takip ediyoruz. Bu sayede zaman içerisinde gidişatı daha iyi görebileceğiz. Saros körfezinde ve İzmit körfezinde kurduğumuz iki farklı istasyon verileri toplamaya başladı bile. Sizde farkındalık sahibi bir dalıcı olarak bu projede bize destek olabilirsiniz.',
          url: 'https://www.youtube-nocookie.com/embed/33FXnjxEPVc',
          link: 'https://gueturkey.com/pb-marmara/'
        },
        {
          title: 'Ya Yakarsa',
          scope: 'Deniz anası artışı son zamanlarda iklim ve besin ağı değişiklikliğinden dolayı artıyor. Yurttaş bilimine destek olarak siz de bu projeye destek olabilirsiniz.',
          link: 'https://yayakarsa.org'
        },
        {
          title: 'DAN Dalış Bağışı',
          scope: 'Dalış sonrası dalıcılarda oluşan sessiz kabarcıkların doppler ölçümü ile dinlendikten sonra, insan vücudu üzerindeki etkilerinin incelenmesi için ortak bir veritabanında toplanmasına yönelik yapılan bir yurttaş bilimidir.',
          url: 'https://www.youtube-nocookie.com/embed/iFxiGp8gNIY',
          link: 'https://www.diversafetyguardian.org'
        },
        {
          title: 'Sualtı Kültür Mirasının Korunması',
          scope: 'Tarihin şekillenmesine yardımcı oluyoruz. Bulduğumuz kültür miraslarını arkeologlar ile paylaşıyoruz.',
          url: 'https://www.youtube-nocookie.com/embed/rYxcSH0rWzg',
          link: 'http://underwaterculturalheritage.net'
        },
        {
          title: 'KarstDive 2020',
          scope: '1998 yılında JJ ve ekibinin 122 metreye kadar keşfettiği, Aysa Kıtasının en derin mağarası olan Suluin Mağarasında araştırma dalaışlarına devam ediyoruz. Amacımız, deniz ile bağlantısını ve dibini bulabilmek.',
          url: 'https://www.youtube-nocookie.com/embed/NjX3O-RN3-8',
          link: ''
        },
        {
          title: 'Deniz, Kıyı ve Plaj Temizliği',
          link: 'https://www.wwf.org.tr/calismalarimiz/oceans/deniz_ky_temizlii/'
        },
        {
          title: 'Saros Sualtı Müzesi',
          scope: '',
          url: 'https://www.youtube-nocookie.com/embed/5BS3LHkt9hY',
          link: 'http://www.estab.gov.tr/dunyanin-ilk-su-alti-tarih-muzesi-saros-korfezinde/'
        },
        {
          title: 'Photogrammetry Yöntemi ile 3D Modelleme',
          scope: '',
          url: 'https://www.youtube-nocookie.com/embed/D0UCWftL2ZI',
          link: 'https://sketchfab.com/nevcanuludas/followers'
        }
      ]
    }
  },
  created () {
    var c = this.conservations[this.dict[this.path]]
    this.conservationTitle = c.title
    this.conservationScope = c.scope
    this.conservationUrl = c.url
    this.conservationLink = c.link
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
