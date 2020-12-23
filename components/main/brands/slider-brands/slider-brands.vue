<template lang="html">
  <b-row>
    <div
      ref="swiper"
      v-swiper:mySwiper="swiperOption"
      class="sviper-container"
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
        slot="pagination"
        class="swiper-pagination"
      />
    </div>
  </b-row>
</template>

<script>
import item from './item';

export default {
  name: 'MainPageBrandsSlider',
  components: {
    item,
  },
  data: () => ({
    swiperOption: {
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    items: [
      {
        id: 0,
        img: 'https://ssfront.s3.eu-west-1.amazonaws.com/m8x5NQk6e4bJQ8lZntRUP8Ry10SJojWF.png',
        link: '/sunglasses/designer/ray-ban-junior/',
      },
      {
        id: 1,
        img: 'https://ssfront.s3.eu-west-1.amazonaws.com/m8x5NQk6e4bJQ8lZntRUP8Ry10SJojWF.png',
        link: '/sunglasses/designer/ray-ban-junior/',
      },
      {
        id: 2,
        img: 'https://ssfront.s3.eu-west-1.amazonaws.com/m8x5NQk6e4bJQ8lZntRUP8Ry10SJojWF.png',
        link: '/sunglasses/designer/ray-ban-junior/',
      },
      {
        id: 3,
        img: 'https://ssfront.s3.eu-west-1.amazonaws.com/m8x5NQk6e4bJQ8lZntRUP8Ry10SJojWF.png',
        link: '/sunglasses/designer/ray-ban-junior/',
      },
      {
        id: 4,
        img: 'https://ssfront.s3.eu-west-1.amazonaws.com/m8x5NQk6e4bJQ8lZntRUP8Ry10SJojWF.png',
        link: '/sunglasses/designer/ray-ban-junior/',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.row {
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-left: 15px;
  .swiper-pagination {
    margin-top: 15px;
    position: static;
  }
}
</style>
