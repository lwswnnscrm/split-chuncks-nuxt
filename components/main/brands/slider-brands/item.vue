<template lang="html">
  <div class="item">
    <a :href="item.link">
      <img
        :src="$il(item.img)"
        alt="#"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'MainPageBrandsItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: block;
  img {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
}
</style>
