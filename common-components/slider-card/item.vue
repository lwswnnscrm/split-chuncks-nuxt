<template lang="html">
  <div>
    <h3
      class="bold"
      v-html="$t(item.title)"
    />
    <hr>
    <p v-html="$t(item.txt)" />
    <button
      type="button"
      name="button"
      class="small bold button__ghost--invert"
    >
      <a :href="item.link">
        {{ $t('gettext.main_page.learn_more') }}
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SliderCardItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/style/_vars.scss";

div {
  padding: 45px 35px;
  color: $primary;
  background-color: $accent-light;
  h3 {
    padding-bottom: 5px;
  }
  hr {
    margin-bottom: 10px;
  }
  p {
    padding-bottom: 30px;
  }
  button {
    width: 40%;
    margin-top: 65px;
    white-space: nowrap;
    a {
      color: $primary;
    }
    &:hover {
      a {
        color: $white;
      }
    }
    @media(max-width: 567px) {
      width: 50%;
    }
  }
}
</style>
