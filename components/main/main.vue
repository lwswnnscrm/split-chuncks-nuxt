<template lang="html">
  <main>
    <slider />
    <collection />
    <specialOffers />
    <guides />
    <brands />
    <choose />
  </main>
</template>

<script>
import slider from './slider/slider';
import collection from './collection/collection';
import specialOffers from './speccial-offers/speccial-offers';
import guides from './guides/guides';
import brands from './brands/brands';
import choose from './choose/choose';

export default {
  name: 'MainPage',
  components: {
    slider,
    collection,
    specialOffers,
    guides,
    brands,
    choose,
  },
};
</script>

<style lang="scss" scoped>
</style>
