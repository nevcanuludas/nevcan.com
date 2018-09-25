<template lang='pug' src='./Detail.pug'></template>

<script>
export default {
  name: 'ConservationDetails',
  data () {
    return {
      path: this.$route.params.id,
      conservationTitle: '',
      conservationScope: '',
      // JS Dictionary - Associative Arrays in JavaScript
      dict: {
        'pb-marmara': 0,
      },
      // Conservations JSON
      conservations: [
        {
          title: 'Project Baseline: Marmara',
          scope: 'Saros körfezinde kurulan ilk istasyon ile görüş canlilik orani vs. vs. ölçümlenmektedir.'
        }
      ]
    }
  },
  created () {
    var c = this.conservations[this.dict[this.path]]
    this.conservationTitle = c.title
    this.conservationScope = c.scope
  }
}
</script>

<style lang='sass' src='./Detail.sass' scoped></style>
