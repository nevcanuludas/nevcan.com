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
          title: 'Modifiye Dalıcı Kursları',
          price: '550€',
          scope: `
          Kursun amacı WRSTC üyelerinin (NAUI, PADI, PDIC, SDI, SSI, SNSI, RAID, ACUC, DAN, IDEA, NASDS, ProTec), Dünya Sualtı Aktiviteleri Konfederasyonu (CMAS) ve bu konfederasyona bağlı olan federasyonların (TSSF) ve DIR Diving felsefesini geliştiren (ISE, GUE, UTD) üst düzey ekollerin sistemlerin standartlarının harmanlanması sonucu oluşan genişletilmiş bir eğitim programı ile adayları bilgili, tecrübeli ve farkındalık sahibi seçkin dalıcılar haline getirmektir. Kurs sonunda katılımcıların başarılı bir şekilde tamamlamasının ardından TSSF/CMAS ve ProTec sertifikalarına beraber sahip olur.
          \n \n
          Kurs 1* Dalıcı, 2* Dalıcı ve 3* Dalıcı seviyelerine göre ayrılmaktadır. Kurs kapsamında yeterliliğinize uygun sınıfa katılabilirsiniz.
          `,
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Yeterli seviyede yüzme bilmek',
            'Dalış yapmanıza engel bir sağlık sorununuzun buunmaması',
            '2 ve 3 yildiz bilgileri de girilmeli !important'
          ],
          includes: [
            '12 saatlik teorik eğitim',
            '10 açık deniz dalışı',
            'Dalışlarda kullanılacak ekipmanlar',
            'Eğitim materyalleri',
            'Sertifika ücretleri',
            '3* Dalıcı olmak için gerekli uzmanlıklar',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)',
            'Özel hediyeler!'
          ],
          quota: 'Teorik eğitimler ve pratik eğitimler 2:1 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Batık Dalışı Uzmanlığı',
          price: '100€',
          scope: "Kursun amacı 30m'ye kadar olan derinliklerdeki batıklara güvenle penatrasyon dalışları gerçekleştirebilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Batık Dalışı Uzmanı (WRECK) belgesini almaya hak kazanırlar.",
          prerequisites: [
            '16 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            '2* Dalıcı Belgesi ya da dengi bir belgeye sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '2 saatlik teorik eğitim',
            '2 batık dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanıma ek olarak: pusula, derinlik ölçer, yazı tahtası dahil)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'DPV Uzmanlığı',
          price: '150€',
          scope: 'Kursun amacı daha geniş menzillere daha az efor harcarayak dalışları gerçekleştirebilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec DPV Uzmanı (scooter) belgesini almaya hak kazanırlar.',
          prerequisites: [
            '15 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '1* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '2 saatlik teorik eğitim',
            '2 DPV dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanıma ek olarak: DPV)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 2:1 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Kuru Elbise Uzmanlığı',
          price: '100€',
          note: 'Kursa katılmak isteyenlerin kendi kuru elbiseleri olmak zorundadır. Kuru elbiseler boy/kilo oranından dolayı kişiye özel üretilir ve bir dalış merkezinde üzerinize uygun bir kuru elbise bulma ihtimaliniz oldukça düşüktür. Mümkünse sıkıştırılmış neopren kuru elbiselerden kaçınmalı ve trilamine veya kevlar elbiseler tercih edilmelidir.',
          scope: 'Kursun amacı dalış konforunu arttırmak ve daha soğuk sularda dalış yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Kuru Elbise (drysuit) belgesini almaya hak kazanırlar.',
          prerequisites: [
            '15 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '1* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '3 saatlik teorik eğitim',
            '4 Drysuit dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (Kuru elbise HARİÇ)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 6:1, pratik eğitimler ise 3:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Buz Dalışı Uzmanlığı',
          price: '100€',
          scope: 'Kursun amacı 4 derecenin altında ve limitli çıkışın bulunduğu buz altında gerçekleştirilen dalışları yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Buz Dalışı (ice diving) belgesini almaya hak kazanırlar.',
          prerequisites: [
            '15 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '1* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '3 saatlik teorik eğitim',
            '2 Buz dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (Kuru elbise HARİÇ)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 6:1, pratik eğitimler ise 3:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Mağara Keşif Dalışı Uzmanlığı',
          price: '150€',
          scope: 'Kursun amacı güneş ışığının girmediği, üstü kapalı bölgelerde 40 metre kuralı çerçevesinde güvenli dalışlar yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Mağara Keşif Dalışı (Discover Cave Diver) uzmanlığı belgesini almaya hak kazanırlar.',
          prerequisites: [
            '15 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '2* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '4 saatlik teorik eğitim',
            "4 dalış (2'si mağara dalışı)",
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanımlara ek olarak; makara, smb, birincil ışık kaynağı, ikincil ışık kaynağı ve yedek maske)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 2:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Nitrox Uzmanlığı',
          price: '100€',
          scope: 'Kursun amacı 22% ile 40% arasında oksijence zengin hava tüpü ile daha az yorgunluk hissi ve daha uzun dip zamanı ile dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Nitrox1 Dalıcı belgesini almaya hak kazanırlar.',
          prerequisites: [
            '16 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '1* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '4 saatlik teorik eğitim',
            '2 nitrox dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanımlara ek olarak; oksijen analizörü dahil)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Sidemount Uzmanlığı',
          price: '150€',
          scope: 'Kursun amacı yanlara takılan 2 tüp ile daha esnek ve konforlu dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Sidemount Dalıcı belgesini almaya hak kazanırlar.',
          prerequisites: [
            '18 yaşını doldurmuş olmak',
            '2* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '4 saatlik teorik eğitim',
            '4 sidemount dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanımlara ek olarak; 2 regülatör seti, SM BCD, 2 tüp)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 2:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Zero to Hero',
          scope: `
            Kursun amacı dalış konusunda hiçbir bilgisi olmayan ya da çok az bilgisi ve tecrübesi olan katılımcıların ileri seviye dalış bilgi ve tecrübesine ulaştırmaktır. Kurs kapsamında aşağıdaki eğitimler verilecektir ve sonunda başarılı olanlar aşağıda belirtilen dalıcı belgelerini almaya hak kazanırlar;

            1* Dalıcı (18m) [TSSF/CMAS veya ProTec veya PADI],
            2* Dalıcı (30m) [TSSF/CMAS veya ProTec veya PADI],
            Mükemmel Yüzerlilik Uzmanlığı [TSSF],
            Nitrox Uzmanlığı (EAN40) [TSSF veya ProTec],
            Derin Dalış Uzmanlığı (40m) [TSSF veya ProTec],
            Mağara Keşif Dalışı Uzmanlığı [ProTec],
            Batık Dalışı Uzmanlığı [TSSF veya ProTec],
            Scooter (DPV) Uzmanlığı [ProTec],
            Arama Kurtarma Eğitimi [TSSF],
            Gece Dalışı Eğitimi [TSSF],
            SMB Kullanımı Eğitimi,
            Serbest Dalış Eğitimi (10m’ye kadar),
            Temel İlkyardım Eğitimi [TSSF]
          `,
          prerequisites: [
            '16 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Yeterli seviyede yüzme bilmek ve yüksek kondisyona sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '20 saatlik teorik eğitim',
            '30 açık deniz dalışı',
            'Dalışlarda kullanılacak ekipmanlar \n (standart donanımlara ek olarak uzmanlıkların gerektirdikleri ekipmanlar dahil)',
            'Sertifika ücretleri',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler ve  pratik eğitimler 2:1 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Serbest Dalış Kursu (Lv1)',
          price: '200€',
          scope: 'Kursun amacı 10 metre derinliğe kadar minimum 1 dakika dip zamanlı dalışları güvenle gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Serbest Dalıcı (Snorkel Diver) belgesini almaya hak kazanırlar.',
          hasPadiClasses: true,
          prerequisites: [
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            '300 metreyi 20 dakikanın altında serbest stil yüzebilmek',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '8 saatlik teorik eğitim',
            '25 açık deniz dalışı',
            'Dalışlarda kullanılacak temel ekipmanlar (maske, palet, snorkel ve ağırlıklar) \n (dalıcıların smooth neopren kıyafetleri vücut ölçülerine göre hazırlanmalıdır, o yüzden katılımcıların kendi neoprenleri ile gelmesi beklenir. Ancak katılımcı standart neopren elbise ile dalış yapmak isterse 5mm neopren elbise extra ücret talip edilmeden temin edilebilir)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        {
          title: 'Engelli Dalıcı Kursu',
          price: '200€',
          scope: 'Kursun amacı engelli arkadaşlarımızın sualtında engellerinden kurtulup özgürce ve güvenle dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Engelli Dalıcı (Handicap Diver) belgesini almaya hak kazanırlar.',
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
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 1:1 verilmektedir. Sınıfın açılması için min 1 katılımcı gerekmektedir.'
        }
      ]
    }
  },
  created () {
    var c = this.courses[this.dict[this.path]]
    this.courseTitle = c.title
    this.coursePrice = c.price
    this.courseNote = c.note
    this.courseScope = c.scope
    this.courseHasPadiClass = c.hasPadiClasses
    this.courseImages = c.images
    this.coursePrerequisites = c.prerequisites
    this.courseIncludes = c.includes
    this.courseQuota = c.quota
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
