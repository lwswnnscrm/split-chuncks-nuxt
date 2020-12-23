<template lang="html">
  <b-container>
    <div>
      <h2 class="bold">
        {{ $t('gettext.main_page.special_offers') }}
      </h2>
    </div>
    <b-row class="offers">
      <b-col
        md="6"
        cols="12"
      >
        <div class="offers__item">
          <h3 class="bold">
            {{ $t('gettext.main_page.two_one_glasses') }}
          </h3>
          <hr>
          <p
            class="medium"
            v-html="$t('gettext.main_page.stylish_pairs_low_price')"
          />
          <button
            type="button"
            name="button"
            class="small bold button__ghost--invert"
          >
            <nuxt-link
              :to="localePath('/2for1-glasses/')"
              class="large desktop-only"
            >
              {{ $t('gettext.main_page.shop_now') }}
            </nuxt-link>
          </button>
        </div>
      </b-col>
      <b-col
        md="6"
        cols="12"
      >
        <div class="offers__item">
          <h3 class="bold">
            {{ $t('gettext.main_page.prescription_sunglasses') }}
          </h3>
          <hr>
          <p class="medium">
            {{ $t('gettext.main_page.designer_sunglasses_prescription') }}
          </p>
          <button
            type="button"
            name="button"
            class="small bold button__ghost--invert"
          >
            <nuxt-link
              :to="localePath('/glasses/prescription/')"
              class="large desktop-only"
            >
              {{ $t('gettext.main_page.shop_now') }}
            </nuxt-link>
          </button>
        </div>
      </b-col>
      <b-col
        md="5"
        cols="12"
      >
        <div class="offers__item">
          <h3 class="bold">
            {{ $t('gettext.main_page.contact_lenses') }}
          </h3>
          <hr>
          <p class="medium">
            {{ $t('gettext.main_page.dailies_weeklies_available') }}
          </p>
          <button
            type="button"
            name="button"
            class="small bold button__ghost--invert"
          >
            <nuxt-link
              :to="localePath('/contact-lenses/')"
              class="large desktop-only"
            >
              {{ $t('gettext.main_page.shop_now') }}
            </nuxt-link>
          </button>
        </div>
      </b-col>
      <b-col
        md="7"
        cols="12"
      >
        <div class="offers__item">
          <h3 class="bold">
            {{ $t('gettext.main_page.no_pd') }}
          </h3>
          <hr>
          <p class="medium">
            {{ $t('gettext.main_page.get_accurate_pd') }}
          </p>
          <button
            type="button"
            name="button"
            class="small bold button__ghost--invert"
          >
            <nuxt-link
              :to="localePath('/info/pupillary-distance/')"
              class="large desktop-only"
            >
              {{ $t('gettext.main_page.learn_more') }}
            </nuxt-link>
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'MainPageSpeccialOffers',
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

.container {
  margin-bottom: 100px;
  .offers {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    &__item {
      background-color: $gray700;
      padding: 45px 30px;
      margin-bottom: 30px;
      min-height: 315px;
      h3 {
        padding-bottom: 10px;
        color: $primary;
      }
      hr {
        margin-bottom: 10px;
      }
      p {
        color: $primary;
      }
      button {
        margin-top: 60px;
        a {
          color: $primary;
        }
        &:hover {
          a {
            color: $gray400;
          }
        }
        @media(max-width: 576px) {
          margin-top: 25px;
          width: 50%;
        }
      }
    }
  }
}
</style>
