<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="(item, index) in items" :key="index">
      <div
          class="stories w-200 h-300 rounded-xl mb-3 carousel__item"
          :style="{
          backgroundImage: `url(${item.mediaUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '200px',
          height: '300px'
      }"></div>

    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Slider',
  props: {
    items: Array,
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<style>
.carousel__item {
  min-height: 300px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

