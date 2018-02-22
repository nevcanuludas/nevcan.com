<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'CourseDetails',
  data () {
    return {
      path: this.$route.params.id,
      isVisible: false,
      courseTitle: '',
      coursePrice: '',
      courseScope: '',
      courseImages: '',
      courseHasPadiClass: false,
      coursePrerequisites: '',
      courseIncludes: '',
      courseNotIncluded: 'Ulaşım, konaklama, yeme-içme ve kişisel harcamalar',
      courseQuota: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        '1-yildiz-dalici': 0,
        '2-yildiz-dalici': 1,
        '3-yildiz-dalici': 2,
        'modifiye-dalici': 3,
        'batik-dalisi-uzmanligi': 4,
        'dpv-uzmanligi': 5,
        'kuru-elbise-uzmanligi': 6,
        'buz-dalisi-uzmanligi': 7,
        'magara-kesif-dalisi-uzmanligi': 8,
        'nitrox-uzmanligi': 9,
        'sidemount-uzmanligi': 10,
        'zero-to-hero-egitimi': 11,
        'serbest-dalis-egitimi': 12,
        'engelli-dalici-egitimi': 13
      },
      // Courses JSON
      courses: [
        {
          title: '1* Dalıcı Kursu',
          price: '250€',
          scope: 'Kursun amacı başlangıç seviyesinde bir dalıcı yetirştirmektir. Temel teorik ve pratik eğitimleri alarak max 18 metreye kadar dalışlar gerçekleştirebilirler. Kurs sonunda isteğe bağlı olarak TSSF/CMAS veya ProTec belgesi alabilirsiniz. Alınan belgeler tüm dünyada geçerlidir.',
          images: [
            { src: '', alt: 'TSSF/CMAS 1* Dalıcı Sertifikası' },
            { src: '', alt: 'ProTec 1* Dalıcı Sertifikası' }
          ],
          hasPadiClasses: true,
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Yeterli seviyede yüzme bilmek',
            'Dalış yapmanıza engel bir sağlık sorununuzun bulunmaması'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '5 açık deniz dalışı',
            'Dalışlarda kullanılacak tüm ekipmanlar',
            'Eğitim materyalleri',
            'Logbook',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: '2* Dalıcı Kursu',
          price: '250€',
          scope: 'Kursun amacı yeterli temel becerilere sahip dalıcının kurtarma, derin dalış, gece dalışı becerilerini arttırmaktır. Kurs sonunda isteğe bağlı olarak TSSF/CMAS veya ProTec belgesi alabilirsiniz. Alınan belgeler tüm dünyada geçerlidir.',
          images: [
            { src: '', alt: 'TSSF/CMAS 2* Dalıcı Sertifikası' },
            { src: '', alt: 'ProTec 2* Dalıcı Sertifikası' }
          ],
          hasPadiClasses: true,
          prerequisites: [
            'TSSF/CMAS için 15 yaşını doldurmuş olmak',
            'ProTec için 16 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '1* Dalıcı (yada dengi) belgeye sahip olmak',
            'TSSF/CMAS için 1* Dalıcı belgesini aldıktan sonra 20 kayıtlı dalış yapmış olmak',
            'ProTec için 1* Dalıcı belgesini aldıktan sonra 25 kayıtlı dalış yapmış olmak',
            'Dalış yapmanıza engel bir sağlık sorununuzun bulunmaması'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '5 açık deniz dalışı (1 derin dalış [42m], 1 gece dalışı)',
            'Dalışlarda kullanılacak ekipmanlar',
            'Eğitim materyalleri',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: '3* Dalıcı Kursu',
          price: '250€',
          scope: 'Kursun amacı profesyonelliğe ilk adımı atmak isteyen dalıcı adaylarının liderlik becerilerini artıtmaktır. Kurs sonunda isteğe bağlı olarak TSSF/CMAS veya ProTec belgesi alabilirsiniz. Alınan belgeler tüm dünyada geçerlidir.',
          images: [
            { src: '', alt: 'TSSF/CMAS 3* Dalıcı Sertifikası' },
            { src: '', alt: 'ProTec 3* Dalıcı Sertifikası' }
          ],
          hasPadiClasses: true,
          prerequisites: [
            '18 yaşını doldurmuş olmak',
            '2* Dalıcı yada dengi bir belgeye sahip olmak',
            'TSSF/CMAS için 2* Dalıcı belgesine sahip olduktan sonra 50 kayıtlı dalış yapmış olmak',
            'ProTec için 2* Dalıcı belgesine sahip olduktan sonra 60 kayıtlı dalış yapmış olmak',
            'İlköğretim diplomasına sahip olmak',
            'Derin Dalış, Temel İlkyardım, Yön Bulma uzmalıklarına sahip olmak',
            'Dalış yapmanıza engel bir sağlık probleminizin bulunmaması'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '4 açık deniz dalışı (1 derin dalış [42m])',
            'Dalışlarda kullanılacak ekipmanlar',
            'Eğitim materyalleri',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: '',
          price: '',
          scope: '',
          hasPadiClasses: '',
          prerequisites: [],
          includes: [],
          quota: '',
          alternativeCourses: []
        }
      ]
    }
  },
  created () {
    this.courseTitle = this.courses[this.dict[this.path]].title
    this.coursePrice = this.courses[this.dict[this.path]].price
    this.courseScope = this.courses[this.dict[this.path]].scope
    this.courseHasPadiClass = this.courses[this.dict[this.path]].hasPadiClasses
    this.courseImages = this.courses[this.dict[this.path]].images
    this.coursePrerequisites = this.courses[this.dict[this.path]].prerequisites
    this.courseIncludes = this.courses[this.dict[this.path]].includes
    this.courseQuota = this.courses[this.dict[this.path]].quota
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
