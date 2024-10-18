<template>
  <Carousel class="mt-3" v-if="items !== undefined" :items-to-show="2.1" :wrap-around="true" :autoplay="autoplay"
            :mouse-drag="false" :touch-drag="false">
    <Slide v-for="(item, index) in items" :key="index" class="slide-item position-relative">

      <div
          class="stories rounded-xl carousel__item_profile opacity-98 h-full w-full blur"
          :style="{
          backgroundImage: `url(${item.profilePicUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
      }"></div>

      <div
          class="position-absolute top-50 start-50 translate-middle z-30 d-flex justify-content-center align-items-center">
        <h1 class="display-1 text-center">🔒</h1>
      </div>
    </Slide>
  </Carousel>
  <p class="fst-italic mt-4 fw-semibold text-danger">
    ... e mais <strong class="fs-2"> {{ random_number }}</strong>
  </p>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ProfilesList',
  props: {
    items: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Number,
      required: true,
    },
    random_number: {
      type: Number,
      required: true,
      default: 3
    }
  },
  components: {
    Carousel,
    Slide,
  },
})
</script>

<style>
.carousel__item_profile {
  height: 300px;
  width: 200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  flex: 0.9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  filter: blur(5px);
  transition: filter 0.3s ease; /* Smooth transition for the blur */
}

.slide-item {
  margin: 0; /* Remove margin */
}

/* Adjust styles for smaller screens */
@media (max-width: 768px) {
  .carousel__item_profile {
    height: 200px;
    width: 150px;
    filter: blur(3px);
  }
}

@media (max-width: 480px) {
  .carousel__item_profile {
    height: 150px;
    width: 120px;
    filter: blur(2px);
  }
}
</style>
