<template lang='pug' src='./Detail.pug'></template>

<script>
import jsonCertificateList from './CertificateList.json'

export default {
  name: 'CertificateDetails',
  data () {
    return {
      path: this.$route.params.id,
      certificateTitle: '',
      certificateScope: '',
      certificateVerification: '',
      certificateImages: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'gue': 0,
        'tssf': 1,
        'tdi': 2,
        'ssi': 3,
        'nsc': 4,
        'ccr': 5,
        'lifeguard': 6,
        'tc-udhb': 7
      },
      // Certificates JSON
      certificates: jsonCertificateList
    }
  },
  created () {
    var c = this.certificates[this.dict[this.path]]
    this.certificateTitle = c.title
    this.certificateScope = c.scope
    this.certificateVerification = c.verification
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
