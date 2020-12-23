<template lang="html">
  <div class="guides">
    <b-container>
      <b-row>
        <b-col
          md="10"
          sm="12 "
          cols="12"
        >
          <h2 class="bold">
            {{ $t('gettext.main_page.guides_information') }}
          </h2>
        </b-col>
        <b-col
          cols="2"
          class="all-guides"
        >
          <nuxt-link
            :to="localePath('/guides/')"
            class="large bold"
          >
            {{ $t('gettext.main_page.all_guides') }}
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="slider">
          <sliderCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sliderCard from '~/common-components/slider-card/slider-card';

export default {
  name: 'MainPageGuide',
  components: {
    sliderCard,
  },
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.guides {
  margin-bottom: 100px;
  .all-guides {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
    a {
      color: $black;
      padding: 0 0 0 25px;
      margin-bottom: 35px;
    }
    @media(max-width: 767px) {
      display: none;
    }
  }
  .container-fluid {
    .row {
      overflow: hidden;
    }
  }
}
::v-deep .item {
  margin-bottom: 15px;
  button {
    width: auto;
  }
}

.slider {
  padding-left: calc((100% - 1110px) / 2);
}
</style>
