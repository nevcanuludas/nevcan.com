<template lang='pug' src='./Detail.pug'></template>

<script>
import BirYildizDalici from './CourseDetailData/1-yildiz-dalici.json'
import IkiYildizDalici from './CourseDetailData/2-yildiz-dalici.json'
import UcYildizDalici from './CourseDetailData/3-yildiz-dalici.json'

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
        // Modifiye Dalıcı Kursları
        {
          title: 'Modifiye Dalıcı Programları',
          price: 'Kurs ücreti 550€´dur.',
          scope: `Kursun amacı WRSTC üyelerinin (NAUI, PADI, PDIC, SDI, SSI, SNSI, RAID, ACUC, DAN, IDEA, NASDS, ProTec), Dünya Sualtı Aktiviteleri Konfederasyonu (CMAS) ve bu konfederasyona bağlı olan federasyonların (TSSF) ve DIR Diving felsefesini geliştiren (GUE, UTD, ISE) üst düzey ekollerin sistemlerin standartlarının harmanlanması sonucu oluşan genişletilmiş bir eğitim programı ile adayları bilgili, tecrübeli ve farkındalık sahibi seçkin dalıcılar haline getirmektir. Kurs sonunda katılımcıların başarılı bir şekilde tamamlamasının ardından TSSF/CMAS ve ProTec sertifikalarına beraber sahip olur.\n \nKurs 1* Dalıcı, 2* Dalıcı ve 3* Dalıcı seviyelerine göre ayrılmaktadır. Kurs kapsamında yeterliliğinize uygun sınıfa katılabilirsiniz.`,
          prerequisites: [
            '1* Modifiye Dalıcı için gerekli Ön Şartlar:',
            '14 yaşını doldurmuş olmak',
            '18 yaşının altındakiler için veli onayı',
            'Yeterli seviyede yüzme bilmek',
            'Dalış yapmanıza engel bir sağlık sorununuzun buunmaması',
            '2 ve 3 yildiz bilgileri de girilmeli !important',
            '---------------------------------------------',
            '2* Modifiye Dalıcı için gerekli Ön Şartlar:',
            '15 yaşını doldurmuş olmak,',
            '18 yaşının altındakiler için veli onayı,',
            '1* Dalıcı (yada dengi) belgeye sahip olmak,',
            '1* Dalıcı belgesini aldıktan sonra 20 kayıtlı dalış yapmış olmak,',
            'Dalış yapmanıza engel bir sağlık sorununuzun bulunmaması.',
            '---------------------------------------------',
            '3* Modifiye Dalıcı için gerekli Ön Şartlar:',
            '18 yaşını doldurmuş olmak,',
            '2* Dalıcı (yada dengi) belgeye sahip olmak,',
            '2* Dalıcı belgesine sahip olduktan sonra 50 kayıtlı dalış yapmış olmak,',
            'İlköğretim diplomasına sahip olmak',
            'Dalış yapmanıza engel bir sağlık probleminizin bulunmaması.'
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
        // Batık Dalışı Uzmanlığı
        {
          title: 'Batık Dalışı Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: "Kursun amacı 30m'ye kadar olan derinliklerdeki batıklara güvenle penatrasyon dalışları gerçekleştirebilmektir. Kurslar TSSF ve ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ister TSSF ister ProTec Batık Dalışı Uzmanı (WRECK) belgesini almaya hak kazanırlar.",
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF/CMAS Batık Dalışı Uzmanlığı Sertifikası' },
            { src: '/static/img/courses-temp/protec-org-wreck.jpeg', alt: 'ProTec Batık Dalışı Uzmanlığı Sertifikası' }
          ],
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
        // Derin Dalış Uzmanlığı
        {
          title: 'Derin Dalış Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: "Kursun amacı 40m'ye kadar güvenle dalışları gerçekleştirebilmektir. Kurslar TSSF standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar TSSF Derin Dalış Uzmanı belgesini almaya hak kazanırlar.",
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF/CMAS Derin Dalış Uzmanlığı Sertifikası' }
          ],
          prerequisites: [

          ],
          includes: [
            '2 saatlik teorik eğitim',
            '2 derin dalış',
            'Dalışlarda kullanılacak ekipmanlar',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // DPV Uzmanlığı
        {
          title: 'DPV Uzmanlığı',
          price: 'Kurs ücreti 150€´dur.',
          scope: 'Kursun amacı daha geniş menzillere daha az efor harcarayak dalışları gerçekleştirebilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec DPV Uzmanı (scooter) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-dpv.jpeg', alt: 'ProTec DPV Dalışı Uzmanlığı Sertifikası' }
          ],
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
        // Kuru Elbise Uzmanlığı
        {
          title: 'Kuru Elbise Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          note: 'Kursa katılmak isteyenlerin kendi kuru elbiseleri olmak zorundadır. Kuru elbiseler boy/kilo oranından dolayı kişiye özel üretilir ve bir dalış merkezinde üzerinize uygun bir kuru elbise bulma ihtimaliniz oldukça düşüktür. Mümkünse sıkıştırılmış neopren kuru elbiselerden kaçınmalı ve trilamine veya kevlar elbiseler tercih edilmelidir.',
          scope: 'Kursun amacı dalış konforunu arttırmak ve daha soğuk sularda dalış yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Kuru Elbise (drysuit) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-drysuit.jpeg', alt: 'ProTec Kuru Elbise Uzmanlığı Sertifikası' }
          ],
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
        // Buz Dalışı Uzmanlığı
        {
          title: 'Buz Dalışı Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: 'Kursun amacı 4 derecenin altında ve limitli çıkışın bulunduğu buz altında gerçekleştirilen dalışları yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Buz Dalışı (ice diving) belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-ice.jpeg', alt: 'ProTec Buz Dalışı Uzmanlığı Sertifikası' }
          ],
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
        // Mağara Keşif Dalışı Uzmanlığı
        {
          title: 'Mağara Keşif Dalışı Uzmanlığı',
          price: 'Kurs ücreti 150€´dur.',
          scope: 'Kursun amacı güneş ışığının girmediği, üstü kapalı bölgelerde 40 metre kuralı çerçevesinde güvenli dalışlar yapabilmektir. Kurslar ProTec standartlarına uygun olarak verilmektedir. Kurs sonunda başarılı olanlar ProTec Mağara Keşif Dalışı (Discover Cave Diver) uzmanlığı belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-cave.jpeg', alt: 'ProTec Mağara Keşif Dalışı Uzmanlığı Sertifikası' }
          ],
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
            'Dalışlarda kullanılacak ekipmanlar (standart donanımlara ek olarak; makara, smb, birincil ışık kaynağı, ikincil ışık kaynağı ve yedek maske)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 2:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // Nitrox Uzmanlığı
        {
          title: 'Nitrox Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: 'Kursun amacı 22% ile 40% arasında oksijence zengin hava tüpü ile daha az yorgunluk hissi ve daha uzun dip zamanı ile dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Nitrox1 Dalıcı belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF Nitrox Dalışı Uzmanlığı Sertifikası' },
            { src: '/static/img/courses-temp/protec-org-nitrox.jpeg', alt: 'ProTec Nitrox Dalışı Uzmanlığı Sertifikası' }
          ],
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
            'Dalışlarda kullanılacak ekipmanlar (standart donanımlara ek olarak; oksijen analizörü dahil)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // Sidemount Uzmanlığı
        {
          title: 'Sidemount Uzmanlığı',
          price: 'Kurs ücreti 150€´dur.',
          scope: 'Kursun amacı yanlara takılan 2 tüp ile daha esnek ve konforlu dalışlar gerçekleştirebilmektir. Kurs sonunda başarılı olanlar ProTec Sidemount Dalıcı belgesini almaya hak kazanırlar.',
          images: [
            { src: '/static/img/courses-temp/protec-org-sidemount.jpeg', alt: 'ProTec Sidemount Dalışı Uzmanlığı Sertifikası' }
          ],
          prerequisites: [
            '18 yaşını doldurmuş olmak',
            '2* Dalıcı yada dengi bir belgeye sahip olmak',
            'Yeterli teorik ve pratik dalış becerisine sahip olmak',
            'Dalış yapmasına engel bir sağlık sorununun bulunmaması'
          ],
          includes: [
            '4 saatlik teorik eğitim',
            '4 sidemount dalışı',
            'Dalışlarda kullanılacak ekipmanlar (standart donanımlara ek olarak; 2 regülatör seti, SM BCD, 2 tüp)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik eğitimler max 4:1, pratik eğitimler ise 2:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // İlkyardım Uzmanlığı
        {
          title: 'İlkyardım Uzmanlığı',
          price: 'Kurs ücreti ?? €´dur.',
          scope: 'Kursun amacı ...',
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF İlkyardım Uzmanlığı Sertifikası' }
          ],
          prerequisites: [
          ],
          includes: [
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // Tanıtım Dalışı Uzmanlığı
        {
          title: 'Tanıtım Dalışı Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: 'Kursun amacı su altı ile ilk kez buluşacak kişileri max 5 metre derinliğe kadar daldırabilmek için gerekli olan eğitimin alınmasıdır. TSSF Tanıtım dalışı uzmanları bir dalış okuluna bağlı çalışabilirler.',
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF Tanıtım Dalışı Uzmanlığı Sertifikası' }
          ],
          prerequisites: [
          ],
          includes: [
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // Yön Bulma Uzmanlığı
        {
          title: 'Yön Bulma Uzmanlığı',
          price: 'Kurs ücreti 100€´dur.',
          scope: 'Kursun amacı ...',
          images: [
            { src: '/static/img/courses-temp/tssf-back-uzm.png', alt: 'TSSF Yön Bulma Uzmanlığı Sertifikası' }
          ],
          prerequisites: [
          ],
          includes: [
          ],
          quota: 'Teorik eğitimler max 8:1, pratik eğitimler ise 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
        // Akıntı Dalışı Uzmanlığı
        {
          title: 'Akıntı Dalışı Uzmanlığı'
        },
        // Arama ve Kurtarma Uzmanlığı
        {
          title: 'Arama ve Kurtarma Uzmanlığı'
        },
        // Gece Dalışı Uzmanlığı
        {
          title: 'Gece Dalışı Uzmanlığı'
        },
        // İrtifa Dalışı Uzmanlığı
        {
          title: 'İrtifa Dalışı Uzmanlığı'
        },
        // Kovuk Dalışı Uzmanlığı
        {
          title: 'Kovuk Dalışı Uzmanlığı'
        },
        // Malzeme Bakımı Uzmanlığı
        {
          title: 'Malzeme Bakımı Uzmanlığı'
        },
        // Oksijen Kullanımı Uzmanlığı
        {
          title: 'Oksijen Kullanımı Uzmanlığı'
        },
        // Sualtı Fotoğrafçısı Uzmanlığı
        {
          title: 'Sualtı Fotoğrafçısı Uzmanlığı'
        },
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
        {
          title: 'Zero to Hero Programı',
          scope: `Kursun amacı dalış konusunda hiçbir bilgisi olmayan ya da çok az bilgisi ve tecrübesi olan katılımcıların ileri seviye dalış bilgi ve tecrübesine ulaştırmaktır. Kurs kapsamında aşağıdaki eğitimler verilecektir ve sonunda başarılı olanlar aşağıda belirtilen dalıcı belgelerini almaya hak kazanırlar;\n
•  1* Dalıcı (18m) [TSSF/CMAS veya ProTec veya PADI],
•  2* Dalıcı (30m) [TSSF/CMAS veya ProTec veya PADI],
•  Nitrox Uzmanlığı (EAN40) [TSSF veya ProTec],
•  Batık Dalışı Uzmanlığı [TSSF veya ProTec],
•  Mağara Keşif Dalışı Uzmanlığı [ProTec],
•  Scooter (DPV) Uzmanlığı [ProTec],
•  Mükemmel Yüzerlilik Uzmanlığı [TSSF],
•  Derin Dalış Uzmanlığı (40m) [TSSF],
•  Arama Kurtarma Uzmanlığı [TSSF],
•  Temel İlkyardım Eğitimi [TSSF],
•  Gece Dalışı Uzmanlığı [TSSF],
•  SMB Kullanımı Eğitimi,
•  Serbest Dalış Eğitimi (10m’ye kadar)`,
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
        // Serbest Dalış Kursu (Lv1)
        {
          title: 'Serbest Dalış Kursu (Lv1)',
          price: 'Kurs ücreti 200€´dur.',
          note: 'Dalıcıların smooth neopren kıyafetleri vücut ölçülerine göre hazırlanmalıdır. O yüzden katılımcıların kendi neoprenleri ile gelmesi beklenir. Ancak katılımcı standart neopren elbise ile dalış yapmak isterse 5mm neopren elbise herhangi bir harici ücret talip edilmeden temin edilebilir.',
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
            'Dalışlarda kullanılacak temel ekipmanlar (maske, palet, snorkel, ağırlıklar ve talebe göre neopren elbise)',
            'Sertifika ücreti',
            'Eğitmen giderleri',
            'Eğitim boyunca çekilen tüm sualtı fotoğrafları (talep etmeniz gerekir)'
          ],
          quota: 'Teorik ve pratik eğitimler 4:1 verilmektedir. Sınıfın açılması için min 2 katılımcı gerekmektedir.',
          alternativeCourses: []
        },
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
