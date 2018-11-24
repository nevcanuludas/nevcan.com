<template lang='pug' src='./Detail.pug'></template>

<script>
import BirYildizDalici from './CourseDetailData/1-yildiz-dalici.json'
import IkiYildizDalici from './CourseDetailData/2-yildiz-dalici.json'
import UcYildizDalici from './CourseDetailData/3-yildiz-dalici.json'
import ModifiyeDalici from './CourseDetailData/modifiye-dalici.json'
import Batik from './CourseDetailData/batik-dalisi-uzmanligi.json'
import DerinDalis from './CourseDetailData/derin-dalis-uzmanligi.json'

export default {
  name: 'CourseDetails',
  data () {
    return {
      path: this.$route.params.id,
      isVisible: false,
      courseTitle: '',
      coursePrice: 'Kurs ücreti belirtilmemiştir. Teklif almak için lütfen iletişime geçin.',
      courseNote: '',
      courseScope: '',
      courseImages: '',
      courseHasPadiClass: false,
      coursePrerequisites: '',
      courseIncludes: '',
      courseNotIncluded: 'Ulaşım, konaklama, yeme-içme ve kişisel harcamalar kurs ücretine dahil değildir.',
      courseQuota: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        '1-yildiz-dalici': 0,
        '2-yildiz-dalici': 1,
        '3-yildiz-dalici': 2,
        'modifiye-dalici': 3,
        'batik-dalisi-uzmanligi': 4,
        'derin-dalis-uzmanligi': 5,
        'dpv-uzmanligi': 6,
        'kuru-elbise-uzmanligi': 7,
        'buz-dalisi-uzmanligi': 8,
        'magara-kesif-dalisi-uzmanligi': 9,
        'nitrox-uzmanligi': 10,
        'sidemount-uzmanligi': 11,
        'ilkyardim-uzmanligi': 12,
        'tanitim-dalisi-uzmanligi': 13,
        'yon-bulma-uzmanligi': 14,
        'akinti-dalisi-uzmanligi': 15,
        'arama-ve-kurtarma-uzmanligi': 16,
        'gece-dalisi-uzmanligi': 17,
        'irtifa-dalisi-uzmanligi': 18,
        'kovuk-dalisi-uzmanligi': 19,
        'malzeme-bakimi-uzmanligi': 20,
        'oksijen-kullanimi-uzmanligi': 21,
        'sualti-fotografcisi-uzmanligi': 22,
        'sualti-videocusu-uzmanligi': 23,
        'tup-doldurma-uzmanligi': 24,
        'ust-duzey-yuzerlilik-uzmanligi': 25,
        'zero-to-hero-egitimi': 26,
        'serbest-dalis-egitimi': 27,
        'engelli-dalici-1-egitimi': 28,
        'engelli-dalici-2-egitimi': 29,
        'engelli-dalici-3-egitimi': 30,
        'engelli-dalici-egitmen-asistani': 31,
        'sualti-kultur-mirasinin-korunmasi-uzmanligi': 32
      },
      // Courses JSON
      courses: [
        BirYildizDalici,
        IkiYildizDalici,
        UcYildizDalici,
        ModifiyeDalici,
        Batik,
        DerinDalis,
        // DPV Uzmanlığı
        // Kuru Elbise Uzmanlığı
        // Buz Dalışı Uzmanlığı
        // Mağara Keşif Dalışı Uzmanlığı
        // Nitrox Uzmanlığı
        // Sidemount Uzmanlığı
        // İlkyardım Uzmanlığı
        // Tanıtım Dalışı Uzmanlığı
        // Yön Bulma Uzmanlığı
        // Akıntı Dalışı Uzmanlığı
        // Arama ve Kurtarma Uzmanlığı
        // Gece Dalışı Uzmanlığı
        // İrtifa Dalışı Uzmanlığı
        // Kovuk Dalışı Uzmanlığı
        // Malzeme Bakımı Uzmanlığı
        // Oksijen Kullanımı Uzmanlığı
        // Sualtı Fotoğrafçısı Uzmanlığı
        // Sualtı Videocusu Uzmanlığı
        {
          title: 'Sualtı Videocusu Uzmanlığı'
        },
        // Tüp Doldurma Uzmanlığı
        {
          title: 'Tüp Doldurma Uzmanlığı'
        },
        // Üst Düzey Yüzerlilik Uzmanlığı
        {
          title: 'Üst Düzey Yüzerlilik Uzmanlığı'
        },
        // Zero to Hero
        // Serbest Dalış Kursu (Lv1)
        // Engelli Dalıcı 1 Kursu
        {
          title: 'Engelli Dalıcı 1 Kursu',
          price: 'Kurs ücreti 200€´dur.',
          scope: 'Kursun amacı engelli arkadaşlarımızın sualtında engellerinden kurtulup özgürce ve güvenle dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Engelli Dalıcı (Handicap Diver) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-handicap.jpeg', alt: 'ProTec Engelli Dalıcı Sertifikası' }
          ],
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Dalış yapmasına engel bir sağlık sorununun bulunmadığına dair sualtı hekimi raporu'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '2 havuz dalışı',
            'Dalışlarda kullanılacak ekipmanlar',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 1:2 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.'
        },
        // Engelli Dalıcı 2 Kursu
        {
          title: 'Engelli Dalıcı 2 Kursu',
          price: 'Kurs ücreti 200€´dur.',
          scope: 'Kursun amacı engelli arkadaşlarımızın sualtında engellerinden kurtulup özgürce ve güvenle dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Engelli Dalıcı (Handicap Diver) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-handicap.jpeg', alt: 'ProTec Engelli Dalıcı Sertifikası' }
          ],
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Dalış yapmasına engel bir sağlık sorununun bulunmadığına dair sualtı hekimi raporu'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '2 havuz dalışı',
            'Dalışlarda kullanılacak ekipmanlar',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 1:2 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.'
        },
        // Engelli Dalıcı 3 Kursu
        {
          title: 'Engelli Dalıcı 3 Kursu',
          price: 'Kurs ücreti 200€´dur.',
          scope: 'Kursun amacı engelli arkadaşlarımızın sualtında engellerinden kurtulup özgürce ve güvenle dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Engelli Dalıcı (Handicap Diver) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-handicap.jpeg', alt: 'ProTec Engelli Dalıcı Sertifikası' }
          ],
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Dalış yapmasına engel bir sağlık sorununun bulunmadığına dair sualtı hekimi raporu'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '2 havuz dalışı',
            'Dalışlarda kullanılacak ekipmanlar',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 1:2 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.'
        },
        // Engelli Dalıcı Eğitmen Asistanı Kursu
        {
          title: 'Engelli Dalıcı Eğitmen Asistanı Kursu',
          price: 'Kurs ücreti 200€´dur.',
          scope: 'Kursun amacı engelli arkadaşlarımızın sualtında engellerinden kurtulup özgürce ve güvenle dalışlar gerçekleştirebilmelerini sağlamaktır. Kurs sonunda başarılı olanlar TSSF Engelli Dalıcı Eğitmen Asistanı belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-handicap.jpeg', alt: 'TSSF Engelli Dalıcı Eğitmen Asistanı Sertifikası' }
          ],
          prerequisites: [
          ],
          includes: [
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.'
        },
        // Sualtı Kültür Mirasının Korunması Uzmanlığı
        {
          title: 'Sualtı Kültür Mirasının Korunması Uzmanlığı'
        }
      ]
    }
  },
  created () {
    var c = this.courses[this.dict[this.path]]
    this.courseTitle = c.title
    c.price && (this.coursePrice = c.price)
    this.courseNote = c.note
    this.courseScope = c.scope
    this.courseHasPadiClass = c.hasPadiClasses
    this.courseImages = c.images
    this.coursePrerequisites = c.prerequisites
    this.courseIncludes = c.includes
    this.courseQuota = c.quota
  },
  methods: {
    visible () {
      this.isVisible = true
    }
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
