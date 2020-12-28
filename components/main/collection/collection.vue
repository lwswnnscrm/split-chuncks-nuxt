<template lang="html">
  <b-container>
    <b-row>
      <!-- <b-col
        md="9"
        sm="12"
        cols="12"
        class="title"
      >
        <h2 class="bold">
          {{ $t('gettext.main_page.largest_eyewear_collection') }}
        </h2>
      </b-col>
      <b-col
        md="3"
        sm="12"
        cols="12"
      >
        <h2>Trust Pilot blok</h2>
      </b-col> -->
      <b-col cols="12">
        <b-row>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-mens.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/glasses/prescription/mens/')">
                {{ $t('gettext.main_page.men') }}
              </nuxt-link>
            </p>
          </b-col>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-womens.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/glasses/prescription/ladies/')">
                {{ $t('gettext.main_page.women') }}
              </nuxt-link>
            </p>
          </b-col>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-supercheap.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/cheap-glasses/')">
                {{ $t('gettext.main_page.price_glasses') }}
              </nuxt-link>
            </p>
          </b-col>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-essentials.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/glasses/prescription/essential/')">
                {{ $t('gettext.main_page.essential') }}
              </nuxt-link>
            </p>
          </b-col>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-designer.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/glasses/prescription/designer/')">
                {{ $t('gettext.main_page.designer') }}
              </nuxt-link>
            </p>
          </b-col>
          <b-col
            md="2"
            sm="12"
            cols="12"
            class="item"
          >
            <img
              src="https://d9qzjwuieyamt.cloudfront.net/5.3.49.2/res/images/banners/home/nav-boutique.jpg?20200228160006"
              alt=""
            >
            <p class="large bold">
              <nuxt-link :to="localePath('/glasses/prescription/boutique/')">
                {{ $t('gettext.main_page.boutique') }}
              </nuxt-link>
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MainPageCollection',
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.container {
  padding-bottom: 100px;
  padding-top: 100px;
  .title {
    padding-right: 65px;
  }
  .item {
    text-align: center;
    img {
      width: 100%;
      padding-bottom: 10px;
    }
    a {
      color: $black;
    }
  }
}
</style>
