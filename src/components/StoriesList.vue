<template>
  <Carousel class="mt-3" v-if="items !== undefined" :items-to-show="2.1" :wrap-around="true">
    <Slide v-for="(item, index) in items" :key="index" class="slide-item position-relative">
      <div
          class="stories rounded-xl carousel__item"
          :style="{
          backgroundImage: `url(${item.mediaUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
      }"></div>

      <!-- Item in the top-left corner -->
      <div class="d-flex position-absolute top-0 start-1 p-3 align-items-center" style="z-index: 10;">
        <div
            class="rounded-circle"
            style="
            min-width: 35px;
            width: 35px;
            min-height: 35px;
            height: 35px;
            background-size: cover;
            background-position: center;
            background-image: url('https://phosphor.ivanenko.workers.dev/?url=https%3A//scontent-lhr6-2.cdninstagram.com/v/t51.2885-19/437511173_751067263832044_6537215531663962691_n.jpg');
          "
            :style="{ backgroundImage: `url(${profilePicture})` }"
        ></div>
        <span class="text-white shadow-md font-normal fs-6 ms-2">
          {{ instaName }}
        </span>
      </div>

      <!-- Small text in the bottom-right corner -->
      <small class="position-absolute text-right text-white" style="z-index: 10; bottom: 15px; right: 32px;">
        <strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock mb-1 me-1">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span class="text-xl">2</span> perfis
        </strong>
        <br>tiraram print
      </small>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'StoriesList',
  props: {
    items: {
      type: Array,
      required: true,
    },
    instaName: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
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
  height: 550px;
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
}

.carousel__slide {
  padding: 0;
  margin: 0;
}

.start-1 {
  left: 12px !important;
}

.slide-item {
  margin: 0; /* Remove margin */
}
</style>
