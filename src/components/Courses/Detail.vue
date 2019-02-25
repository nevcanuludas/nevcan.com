<template lang='pug' src='./Detail.pug'></template>

<script>
import BirYildizDalici from './CourseDetailData/1-yildiz-dalici.json'
import IkiYildizDalici from './CourseDetailData/2-yildiz-dalici.json'
import UcYildizDalici from './CourseDetailData/3-yildiz-dalici.json'
import ModifiyeDalici from './CourseDetailData/modifiye-dalici.json'
import Batik from './CourseDetailData/batik-dalisi-uzmanligi.json'
import DerinDalis from './CourseDetailData/derin-dalis-uzmanligi.json'
import DPV from './CourseDetailData/dpv-uzmanligi.json'
import KuruElbise from './CourseDetailData/kuru-elbise-uzmanligi.json'
import BuzDalisi from './CourseDetailData/buz-dalisi-uzmanligi.json'
import MagaraKesifDalisi from './CourseDetailData/magara-kesif-dalisi-uzmanligi.json'
import Nitrox1 from './CourseDetailData/nitrox-uzmanligi.json'
import Sidemount from './CourseDetailData/sidemount-uzmanligi.json'
import Ilkyardim from './CourseDetailData/ilkyardim-uzmanligi.json'
import TanıtımDalisi from './CourseDetailData/tanitim-dalisi-uzmanligi.json'
import YonBulma from './CourseDetailData/yon-bulma-uzmanligi.json'
import AkintiDalisi from './CourseDetailData/akinti-dalisi-uzmanligi.json'
import AramaVeKurtarma from './CourseDetailData/arama-ve-kurtarma-uzmanligi.json'
import GeceDalisi from './CourseDetailData/gece-dalisi-uzmanligi.json'
import IrtifaDalisi from './CourseDetailData/irtifa-dalisi-uzmanligi.json'
import KovukDalisi from './CourseDetailData/kovuk-dalisi-uzmanligi.json'
import MalzemeBakimi from './CourseDetailData/malzeme-bakimi-uzmanligi.json'
import OksijenKullanimi from './CourseDetailData/oksijen-kullanimi-uzmanligi.json'
import SualtiFotografcisi from './CourseDetailData/sualti-fotografcisi-uzmanligi.json'
import SualtiVideocusu from './CourseDetailData/sualti-videocusu-uzmanligi.json'
import TupDoldurma from './CourseDetailData/tup-doldurma-uzmanligi.json'
import UstDuzeyYuzerlilik from './CourseDetailData/ust-duzey-yuzerlilik-uzmanligi.json'
import ZeroToHero from './CourseDetailData/zero-to-hero-egitimi.json'
import SerbestDalis1 from './CourseDetailData/serbest-dalis-1.json'
import ED1 from './CourseDetailData/engelli-dalici-1-egitimi.json'
import ED2 from './CourseDetailData/engelli-dalici-2-egitimi.json'
import ED3 from './CourseDetailData/engelli-dalici-3-egitimi.json'
import EDEA from './CourseDetailData/engelli-dalici-egitmen-asistani.json'
import SualtiKulturMirasininKorunmasi from './CourseDetailData/sualti-kultur-mirasinin-korunmasi-uzmanligi.json'

import axios from 'axios'

export default {
  name: 'CourseDetails',
  data () {
    return {
      path: this.$route.params.id,
      isVisible: false,
      EURTRY: null,
      courseTitle: '',
      coursePrice: 'Kurs ücreti belirtilmemiştir. Teklif almak için lütfen iletişime geçin.',
      courseNote: '',
      courseScope: '',
      courseImages: '',
      courseHasPadiClass: false,
      courseHasSsiClass: false,
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
        DPV,
        KuruElbise,
        BuzDalisi,
        MagaraKesifDalisi,
        Nitrox1,
        Sidemount,
        Ilkyardim,
        TanıtımDalisi,
        YonBulma,
        AkintiDalisi,
        AramaVeKurtarma,
        GeceDalisi,
        IrtifaDalisi,
        KovukDalisi,
        MalzemeBakimi,
        OksijenKullanimi,
        SualtiFotografcisi,
        SualtiVideocusu,
        TupDoldurma,
        UstDuzeyYuzerlilik,
        ZeroToHero,
        SerbestDalis1,
        ED1,
        ED2,
        ED3,
        EDEA,
        SualtiKulturMirasininKorunmasi
      ]
    }
  },
  mounted () {
    axios
      .get('https://free.currencyconverterapi.com/api/v6/convert?q=EUR_TRY&compact=ultra&apiKey=92293b05b906288cfede')
      .then(response => (this.EURTRY = response.data.EUR_TRY.val))
  },
  created () {
    var c = this.courses[this.dict[this.path]]
    this.courseTitle = c.title
    c.price && (this.coursePrice = c.price)
    this.courseNote = c.note
    this.courseScope = c.scope
    this.courseHasPadiClass = c.hasPadiClasses
    this.courseHasSsiClass = c.hasSsiClasses
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
