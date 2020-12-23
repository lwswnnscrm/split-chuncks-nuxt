<template lang="html">
  <div
    ref="swiper"
    v-swiper:mySwiper="swiperOption"
  >
    <div class="swiper-wrapper">
      <div
        v-for="item in items"
        :key="item.id"
        class="swiper-slide"
      >
        <item
          :item="item"
        />
      </div>
    </div>
    <div
      slot="button-prev"
      class="swiper-button-prev"
    >
      <img
        :src="$il('https://ssfront.s3.eu-west-1.amazonaws.com/SbtWQoxfrMDqGu1HHOkGnqnPMTLThWvc.png')"
        alt="#"
      >
    </div>
    <div
      slot="button-next"
      class="swiper-button-next"
    >
      <img
        :src="$il('https://ssfront.s3.eu-west-1.amazonaws.com/HgjbYYiEXvvbcz3NoCVbiNcDno9qxr3Q.png')"
        alt="#"
      >
    </div>
  </div>
</template>

<script>
import item from './item';

export default {
  name: 'SliderCard',
  components: {
    item,
  },
  data: () => ({
    swiperOption: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      preloadImages: false,
      lazy: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
    },
    items: [
      {
        id: 0,
        title: 'gettext.main_page.lenses_guide',
        txt: 'gettext.main_page.about_different_lenses',
        link: '/guides/lenses/',
      },
      {
        id: 1,
        title: 'gettext.main_page.how_to',
        txt: 'gettext.main_page.get_best_eyewear',
        link: '/guides/how-to/',
      },
      {
        id: 3,
        title: 'gettext.main_page.digital_protection_lenses',
        txt: 'gettext.main_page.get_best_eyewear',
        link: '/guides/lenses/blue-light/',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '~/style/_vars.scss';
@import '~/style/mixins.scss';

.item {
  @media(max-width: 576px) {
    margin-bottom: 8px;
  }
}
.swiper-container {
  width: 100%;
  overflow: hidden;
}
.swiper-slide {
  width: 30vw;
  height: 100%;
  div {
    min-height: 352px;
  }
  @include max-width-md {
    width: 100%;
  }
}
.swiper-button-prev, .swiper-button-next {
  width: auto;
  height: auto;
  background-color: $white;
  background-image: none;
  opacity: 0.5;
  border-radius: 4px;
  padding: 10px 15px;
}
</style>
