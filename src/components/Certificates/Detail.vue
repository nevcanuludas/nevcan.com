<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'CertificateDetails',
  data () {
    return {
      path: this.$route.params.id,
      certificateTitle: '',
      certificateScope: '',
      certificateImages: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'gue': 0,
        'tssf': 1,
        'protec': 2,
        'ssi': 3,
        'lifeguard': 4,
        'others': 5
      },
      // Certificates JSON
      certificates: [
        {
          title: 'Global Underwater Explorers (GUE)',
          scope: 'Global Underwater Explorers ile ilk kez 2014 yılında tanıştım. Uzun süren araştırmalarım sonunda 2017 yılında ilk kez Türkiye′de kurs programı düzenledik ve bende bu sayede eğitim alma şansı buldum. Mağara dalışları hakkındaki eğitimlerime ve Project Baseline üzerindeki projelere aktif olarak devam etmekteyim. Aynı zamanda GUE Turkey′in kurucu başkanıyım.',
          images: [
            { src: '/static/img/certificates/gue/fund-tech.png', alt: 'GUE Fundamentals Tech' }
          ],
          images_back: [
            { src: '/static/img/certificates/gue/fund-tech-back.png', alt: 'GUE Fundamentals Tech (Back)' }
          ]
        },
        {
          title: 'Türkiye Sualtı Sporları Federasyonu (TSSF/CMAS)',
          scope: '2008 yılında başladığım bu serüvene 2011 yılından beri Türkiye Sualtı Sporları Federasyonu,nun aktif eğitmeni olarak devam ediyorum. TSSF sportif dalış branşındaki bütün kursları (dalıcı, uzman dalıcı ve engelli dalıcı) verebiliyorum. Aşağıdaki adresten belgelerimin sorgulayabilirsiniz: https://tssf.gov.tr/dalici-cankurtaran-sorgulama/',
          images: [
            { src: '/static/img/certificates/tssf-cmas/i/2.png', alt: 'TSSF/CMAS 2* Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/rehber.png', alt: 'TSSF Rehber Dalıcı' },
            { src: '/static/img/certificates/tssf/i/engelli-dalici.png', alt: 'TSSF Engelli Dalıcı Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/akinti.png', alt: 'TSSF Akıntı Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/arama-kurtarma.png', alt: 'TSSF Arama ve Kurtarma Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/batik.png', alt: 'TSSF Batık Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/i/derin.png', alt: 'TSSF Derin Dalış Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/gece.png', alt: 'TSSF Gece Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/i/ilkyardim.png', alt: 'TSSF İlkyardım Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/irtifa.png', alt: 'TSSF İrtifa Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/kovuk.png', alt: 'TSSF Kovuk Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/malzeme-bakimi.png', alt: 'TSSF Malzeme Bakımı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/i/nitroks.png', alt: 'TSSF Nitroks Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/oksijen-kullanimi.png', alt: 'TSSF Oksijen Kullanımı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/sualti-fotografcisi.png', alt: 'TSSF Sualtı Fotoğrafçısı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/sualti-videocusu.png', alt: 'TSSF Sualtı Videocusu Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/i/tanitim-dalisi.png', alt: 'TSSF Tanıtım Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/tup-doldurma.png', alt: 'TSSF Tüp Doldurma Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/ust-duzey-yuzerlilik.png', alt: 'TSSF Üst Düzey Yüzerlilik Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/i/yon-bulma.png', alt: 'TSSF Yön Bulma Uzman Dalış Eğitmeni' }
          ]
        },
        {
          title: 'ProTec',
          scope: 'Profesional Technical and Recretional Diving ile 2015 yılında tanıştım. Türkiye′deki ilk eğitmenlerdenim. Tercih etmemin nedeni TSSF bünyesinde henüz bulunmayan bazı uzmanlık kurslarını verebilmektir.',
          images: [
            { src: '/static/img/certificates/protec/i/2.png', alt: 'ProTec 2* Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/nitrox-1.png', alt: 'ProTec Nitrox 1 Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/sidemount.png', alt: 'ProTec Sidemount Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/dry-suit.png', alt: 'ProTec Kuru Elbise Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/discover-cave-diving.png', alt: 'ProTec Mağara Keşif Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/uw-scooter-dpv.png', alt: 'ProTec UW Scooter / DPV Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/ice-divingr.png', alt: 'ProTec Buz Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/wreck-diving.png', alt: 'ProTec Batık Dalışı Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/protec/i/handicap-diver.png', alt: 'ProTec Engelli Dalıcı Uzman Dalış Eğitmeni' }
          ]
        },
        {
          title: 'Scuba Schools International (SSI)',
          scope: 'Scuba Schools International ile serbest dalışa adım attım. Ardından ileri seviye dalış sertifikalarımı aldım.',
          images: [
            { src: '/static/img/certificates/ssi/freediving-level-1.png', alt: 'SSI Serbest Dalış Seviye 1' },
            { src: '/static/img/certificates/ssi/silver-300-diver.png', alt: 'SSI Gümüş 300 Dalıcı' },
            { src: '/static/img/certificates/ssi/extended-range-foundations.png', alt: 'SSI Extended Range Temelleri' },
            { src: '/static/img/certificates/ssi/extended-range-nitrox.png', alt: 'SSI Extended Range Nitrox' }
          ]
        },
        {
          title: 'İlkyardım & Cankurtarma',
          scope: 'Cankurtarma ve ilkyardım ile ilgili çeşitli bakanlıklardan ve federasyondan sahip olduğum sertifikalar.',
          images: [
            { src: '/static/img/certificates/tssf-ils/c/altin.png', alt: 'ILS/TSSF Altın Cankurtaran' },
            { src: '/static/img/certificates/tc-sb/ilkyardimci.png', alt: 'T.C. Sağlık Bakanlığı - İlkyardımcı' },
            { src: '/static/img/certificates/efr/efr-adult.png', alt: 'Emergency Responder CPR/First Aid - Adult' },
            { src: '/static/img/certificates/tc-udhb/stcw-temel-ilkyardim.png', alt: 'T.C. U.D.H.B. STCW Temel İlkyardım' },
            { src: '/static/img/certificates/tssf/i/ilkyardim.png', alt: 'TSSF İlkyardım Uzman Dalış Eğitmeni' },
            { src: '/static/img/certificates/tssf/d/oksijen-kullanimi.png', alt: 'TSSF Oksijen Kullanımı Uzman Dalış Eğitmeni' }
          ]
        },
        {
          title: 'Diğer Belgeler',
          scope: 'Ulaştırma Denizcilik ve Haberleşme Bakanlığı, Sağlık Bakanlığı ve diğer sistemlerinden aldığım; gemici, profesyonel balık adam ve kapalı devre sistemlerine ait belgelerim.',
          images: [
            { src: '/static/img/courses-temp/sf2-airdiluent.jpg', alt: 'SF2 Air Diluent Sertifikası' },
            { src: '/static/img/courses-temp/gemici.jpg', alt: 'Gemici' },
            { src: '/static/img/courses-temp/profesyonel-balikadam.jpg', alt: 'Profesyonel Balıkadam' }
          ]
        }
      ]
    }
  },
  created () {
    var c = this.certificates[this.dict[this.path]]
    this.certificateTitle = c.title
    this.certificateScope = c.scope
    this.certificateImages = c.images
  },
  methods: {

  //   flip = function () {
  //     $('.flip-container').toggleClass('hover');
  //   };
  //   $('#flipper').click( function () {
  //     flip ()
  //   });
  //   $('.flipper').hover( function () {
  //     $(this).closest('.flip-container').toggleClass('hover')
  //   });

  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
