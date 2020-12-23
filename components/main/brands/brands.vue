<template lang="html">
  <b-container>
    <b-row>
      <b-col
        md="10"
        sm="8"
        cols="8"
        class="title"
      >
        <h2 class="bold">
          {{ $t('gettext.main_page.our_brands') }}
        </h2>
      </b-col>
      <b-col
        md="2"
        sm="4"
        cols="4"
        class="all-brands"
      >
        <nuxt-link
          :to="localePath('/brands/')"
          class="large bold"
        >
          {{ $t('gettext.main_page.all_brands') }}
        </nuxt-link>
      </b-col>
    </b-row>
    <sliderBrands />
  </b-container>
</template>

<script>
import sliderBrands from './slider-brands/slider-brands';

export default {
  name: 'MainPageBrands',
  components: {
    sliderBrands,
  },
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.container {
  margin-bottom: 100px;
  .title {
    margin-bottom: 45px;
    h2 {
      padding-bottom: 0;
    }
  }
  .all-brands {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      color: $black;
      margin-bottom: 45px;
    }
  }
}
</style>
