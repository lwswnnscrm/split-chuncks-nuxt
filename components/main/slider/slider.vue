<template lang="html">
  <b-container fluid>
    <b-row>
      <div
        ref="swiper"
        v-swiper:mySwiper="swiperOption"
        style="width: 100%; overflow: hidden;"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
          >
            <b-row class="slider">
              <b-container>
                <b-row>
                  <b-col class="slider__text">
                    <h1
                      class="bold"
                      v-html="$t('gettext.main_page.slider_title')"
                    />
                    <button
                      type="button"
                      name="button"
                      class="bold button__ghost--no-border"
                    >
                      <nuxt-link :to="localePath('/sunglasses/designer/new-items/')">
                        {{ $t('gettext.main_page.shop_now') }}
                      </nuxt-link>
                    </button>
                  </b-col>
                </b-row>
              </b-container>
            </b-row>
          </div>
        </div>
        <div
          slot="button-prev"
          class="swiper-button-prev"
        >
          <img
            src="https://ssfront.s3.eu-west-1.amazonaws.com/SbtWQoxfrMDqGu1HHOkGnqnPMTLThWvc.png"
            alt="#"
          >
        </div>
        <div
          slot="button-next"
          class="swiper-button-next"
        >
          <img
            src="https://ssfront.s3.eu-west-1.amazonaws.com/HgjbYYiEXvvbcz3NoCVbiNcDno9qxr3Q.png"
            alt="#"
          >
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MainPageSlider',
  title: 'Loop mode / Infinite loop',
  data: () => ({
    swiperOption: {
      loop: true,
      slidesPerView: 'auto',
      updateOnWindowResize: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.container-fluid {
  .row {
    height: 100%;
  }
  .swiper-slide {
    background: url('https://ssfront.s3.eu-west-1.amazonaws.com/f0cluOeeBiEcx3IBH5cJQBIFzJxlRDre.jpeg') center center no-repeat;
    background-size: cover;
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
  .slider {
    height: 465px;
    padding: 0 10px;
    @media(max-width: 768px) {
      height: 245px;
    }
    &__text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      color: $white;
      h1 {
        padding-bottom: 25px;
        @media(max-width: 992px) {
          font-size: 60px;
        }
        @media(max-width: 576px) {
          font-size: 24px;
          line-height: 31px;
          padding-bottom: 20px;
          margin-bottom: 40px;
        }
      }
      a {
        color: $black;
      }
    }
  }
}
</style>
