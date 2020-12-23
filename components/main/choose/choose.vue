<template lang="html">
  <b-container fluid>
    <b-container>
      <b-row>
        <div class="title">
          <h2 class="bold">
            {{ $t('gettext.main_page.why_choose_us') }}
          </h2>
          <b-row>
            <b-col
              md="8"
              sm="12"
              cols="12"
            >
              <p class="large bold">
                {{ $t('gettext.main_page.customer_services') }}
              </p>
              <p
                class="medium"
                v-html="$t('gettext.main_page.customer_will_help')"
              />
            </b-col>
            <b-col
              md="4"
              sm="12"
              cols="12"
            >
              <div class="title__logo">
                <img
                  :src="$il(image.logo)"
                  alt="#"
                >
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="information">
          <b-row>
            <b-col
              md="6"
              sm="12"
              cols="12"
              class="information__big-item"
            >
              <p
                class="padding_bottom"
                v-html="$t('gettext.main_page.we_started_in')"
              />
              <p
                v-html="$t('gettext.main_page.high_street_store')"
              />
            </b-col>
            <b-col
              md="6"
              sm="12"
              cols="12"
              class="information__small-items"
            >
              <b-row>
                <b-col
                  md="6"
                  sm="12"
                  cols="12"
                  class="information__small-items--item"
                >
                  <p class="large bold">
                    {{ $t('gettext.main_page.over_brands') }}
                  </p>
                  <p class="medium">
                    {{ $t('gettext.main_page.authorised_retailer_brands') }}
                  </p>
                </b-col>
                <b-col
                  md="6"
                  sm="12"
                  cols="12"
                  class="information__small-items--item"
                >
                  <p class="large bold">
                    {{ $t('gettext.main_page.free_lenses_coatings') }}
                  </p>
                  <p
                    class="medium"
                    v-html="$t('gettext.main_page.savings_compared')"
                  />
                </b-col>
                <b-col
                  md="6"
                  sm="12"
                  cols="12"
                  class="information__small-items--item"
                >
                  <p class="large bold">
                    {{ $t('gettext.main_page.free_delivery_title') }}
                  </p>
                  <p class="medium">
                    {{ $t('gettext.main_page.shipping_available') }}
                  </p>
                </b-col>
                <b-col
                  md="6"
                  sm="12"
                  cols="12"
                  class="information__small-items--item"
                >
                  <p class="large bold">
                    {{ $t('gettext.main_page.price_prescription_glasses') }}
                  </p>
                  <p class="medium">
                    {{ $t('gettext.main_page.prescription_glasses_including') }}
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import image from '~/constants/images/images';

export default {
  name: 'MainPageChoose',
  computed: {
    image: () => image,
  },
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.container {
  padding-bottom: 100px;
  @media(max-width: 576px) {
    padding-bottom: 0;
  }
  p {
   color: $total-black;
  }
  .title {
    padding-bottom: 45px;
    &__logo {
      text-align: right;
      @media(max-width: 767px) {
        display: none;
      }
    }
    h2 {
      padding-bottom: 45px;
      color: $total-black;
      @media(max-width: 576px) {
        padding-bottom: 25px;
      }
    }
    .row {
      div {
        &:first-child {
          @media(max-width: 576px) {
            padding-bottom: 45px;
          }
        }
      }
      a {
        color: $total-black;
      }
    }
  }
  .information {
    &__big-item {
      padding-right: 120px;
      p {
        &:first-child {
          padding-bottom: 30px;
        }
      }
      @media(max-width: 576px) {
         padding-right: 15px;
       }
    }
    &__small-items {
     &--item {
       padding-bottom: 45px;
       p {
         &:first-child {
           padding-bottom: 8px;
         }
       }
      }
    }
  }
}
</style>
