<template>
  <Carousel class="mt-3" v-if="items !== undefined" :items-to-show="2.1" :wrap-around="true">
    <Slide v-for="(item, index) in items" :key="index" class="slide-item">
      <div
          class="stories w-200 h-500 rounded-xl mb-3 carousel__item"
          :style="{
          backgroundImage: `url(${item.mediaUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
      }"></div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Slider',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Carousel,
    Slide,
  },
})
</script>

<style>
.carousel__item {
  min-height: 300px;
  width: 200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.slide-item {
  margin-right: 10px;
}

.carousel__slide {
  padding: 0;
  margin-right: 10px;
}

.carousel__slide--visible {
  width: auto;
}

.carousel__item {
  min-height: 300px;
  width: 200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
}

</style>
