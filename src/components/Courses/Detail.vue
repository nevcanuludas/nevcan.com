<template lang='pug' src='./Detail.pug'></template>

<script>
import Fundamentals from './CourseDetailData/fundamentals.json'
import BirYildizDalici from './CourseDetailData/1-yildiz-dalici.json'
import IkiYildizDalici from './CourseDetailData/2-yildiz-dalici.json'
import UcYildizDalici from './CourseDetailData/3-yildiz-dalici.json'
import OWD from './CourseDetailData/owd.json'
import DG from './CourseDetailData/dg.json'
import ModifiyeDalici from './CourseDetailData/modifiye-dalici.json'
import AkintiDalisi from './CourseDetailData/akinti-dalisi-uzmanligi.json'
import AramaVeKurtarma from './CourseDetailData/arama-ve-kurtarma-uzmanligi.json'
import Batik from './CourseDetailData/batik-dalisi-uzmanligi.json'
import BuzDalisi from './CourseDetailData/buz-dalisi-uzmanligi.json'
import DerinDalis from './CourseDetailData/derin-dalis-uzmanligi.json'
import DPV from './CourseDetailData/dpv-uzmanligi.json'
import GeceDalisi from './CourseDetailData/gece-dalisi-uzmanligi.json'
import Ilkyardim from './CourseDetailData/ilkyardim-uzmanligi.json'
import IrtifaDalisi from './CourseDetailData/irtifa-dalisi-uzmanligi.json'
import KovukDalisi from './CourseDetailData/kovuk-dalisi-uzmanligi.json'
import KuruElbise from './CourseDetailData/kuru-elbise-uzmanligi.json'
import MagaraKesifDalisi from './CourseDetailData/magara-kesif-dalisi-uzmanligi.json'
import MalzemeBakimi from './CourseDetailData/malzeme-bakimi-uzmanligi.json'
import MarineEcology from './CourseDetailData/marine-ecology.json'
import Nitrox1 from './CourseDetailData/nitrox-uzmanligi.json'
import OksijenKullanimi from './CourseDetailData/oksijen-kullanimi-uzmanligi.json'
import Sidemount from './CourseDetailData/sidemount-uzmanligi.json'
import StressRescue from './CourseDetailData/stress-and-rescue.json'
import SualtiFotografcisi from './CourseDetailData/sualti-fotografcisi-uzmanligi.json'
import SualtiKulturMirasininKorunmasi from './CourseDetailData/sualti-kultur-mirasinin-korunmasi-uzmanligi.json'
import SualtiVideocusu from './CourseDetailData/sualti-videocusu-uzmanligi.json'
import TanitimDalisi from './CourseDetailData/tanitim-dalisi-uzmanligi.json'
import TupDoldurma from './CourseDetailData/tup-doldurma-uzmanligi.json'
import PerfectBuoyancy from './CourseDetailData/perfect-buoyancy.json'
import YonBulma from './CourseDetailData/yon-bulma-uzmanligi.json'
import ZeroToHero from './CourseDetailData/zero-to-hero-egitimi.json'
import SnorkelDiver from './CourseDetailData/snorkel-diver.json'
import SerbestDalis1 from './CourseDetailData/serbest-dalis-1.json'
import ED1 from './CourseDetailData/engelli-dalici-1-egitimi.json'
import ED2 from './CourseDetailData/engelli-dalici-2-egitimi.json'
import ED3 from './CourseDetailData/engelli-dalici-3-egitimi.json'
import EDEA from './CourseDetailData/engelli-dalici-egitmen-asistani.json'
import ScubaRanger from './CourseDetailData/scuba-ranger.json'
import TryScuba from './CourseDetailData/try-scuba.json'
import ScubaSkillsUpdate from './CourseDetailData/scuba-skills-update.json'
import AdvancedAdventurer from './CourseDetailData/advanced-adventurer.json'

// import axios from 'axios'

export default {
  name: 'CourseDetails',
  data () {
    return {
      path: this.$route.params.id,
      isVisible: false,
      // EURTRY: null,
      EURTRY: 18.0,
      courseSystem: '',
      courseTitle: '',
      coursePrice: 'Kurs ücreti belirtilmemiştir. Teklif almak için lütfen iletişime geçin.',
      coursePaymentLink: '',
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
        'fundamentals': 0,
        '1-yildiz-dalici': 1,
        '2-yildiz-dalici': 2,
        '3-yildiz-dalici': 3,
        'owd': 4,
        'dg': 5,
        'modifiye-dalici': 6,
        'akinti-dalisi-uzmanligi': 7,
        'arama-ve-kurtarma-uzmanligi': 8,
        'batik-dalisi-uzmanligi': 9,
        'buz-dalisi-uzmanligi': 10,
        'derin-dalis-uzmanligi': 11,
        'dpv-uzmanligi': 12,
        'gece-dalisi-uzmanligi': 13,
        'ilkyardim-uzmanligi': 14,
        'irtifa-dalisi-uzmanligi': 15,
        'kovuk-dalisi-uzmanligi': 16,
        'kuru-elbise-uzmanligi': 17,
        'magara-kesif-dalisi-uzmanligi': 18,
        'malzeme-bakimi-uzmanligi': 19,
        'marine-ecology': 20,
        'nitrox-uzmanligi': 21,
        'oksijen-kullanimi-uzmanligi': 22,
        'sidemount-uzmanligi': 23,
        'stress-and-rescue': 24,
        'sualti-fotografcisi-uzmanligi': 25,
        'sualti-kultur-mirasinin-korunmasi-uzmanligi': 26,
        'sualti-videocusu-uzmanligi': 27,
        'tanitim-dalisi-uzmanligi': 28,
        'tup-doldurma-uzmanligi': 29,
        'perfect-buoyancy': 30,
        'yon-bulma-uzmanligi': 31,
        'zero-to-hero-egitimi': 32,
        'snorkel-diver': 33,
        'serbest-dalis-egitimi': 34,
        'engelli-dalici-1-egitimi': 35,
        'engelli-dalici-2-egitimi': 36,
        'engelli-dalici-3-egitimi': 37,
        'engelli-dalici-egitmen-asistani': 38,
        'scuba-ranger': 39,
        'try-scuba': 40,
        'scuba-skills-update': 41,
        'advanced-adventurer': 42
      },
      // Courses JSON
      courses: [
        Fundamentals,
        BirYildizDalici,
        IkiYildizDalici,
        UcYildizDalici,
        OWD,
        DG,
        ModifiyeDalici,
        AkintiDalisi,
        AramaVeKurtarma,
        Batik,
        BuzDalisi,
        DerinDalis,
        DPV,
        GeceDalisi,
        Ilkyardim,
        IrtifaDalisi,
        KovukDalisi,
        KuruElbise,
        MagaraKesifDalisi,
        MalzemeBakimi,
        MarineEcology,
        Nitrox1,
        OksijenKullanimi,
        Sidemount,
        StressRescue,
        SualtiFotografcisi,
        SualtiKulturMirasininKorunmasi,
        SualtiVideocusu,
        TanitimDalisi,
        TupDoldurma,
        PerfectBuoyancy,
        YonBulma,
        ZeroToHero,
        SnorkelDiver,
        SerbestDalis1,
        ED1,
        ED2,
        ED3,
        EDEA,
        ScubaRanger,
        TryScuba,
        ScubaSkillsUpdate,
        AdvancedAdventurer
      ]
    }
  },
  mounted () {
    // axios
    //   .get('https://free.currencyconverterapi.com/api/v6/convert?q=EUR_TRY&compact=ultra&apiKey=92293b05b906288cfede')
    //   .then(response => (this.EURTRY = response.data.EUR_TRY.val))
  },
  created () {
    var c = this.courses[this.dict[this.path]]
    this.courseSystem = c.system
    this.courseTitle = c.title
    c.price && (this.coursePrice = c.price)
    this.coursePaymentLink = c.paymentLink
    this.courseNote = c.note
    this.courseScope = c.scope
    this.courseHasPadiClass = c.hasPadiClasses
    this.courseHasSsiClass = c.hasSsiClasses
    this.courseImages = c.images
    this.courseSubjects = c.subjects
    this.coursePrerequisites = c.prerequisites
    this.courseIncludes = c.includes
    this.courseNotIncluded = c.notIncluded
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
