<template>
  <Carousel class="mt-3" v-if="items !== undefined" :items-to-show="2.1" :wrap-around="true">
    <Slide v-for="(item, index) in items" :key="index" class="slide-item position-relative">
      <!-- Slide Background with Blur Effect -->
      <div
          class="stories rounded-xl carousel__item opacity-98 h-full w-full blur-[5px] saturate-0"
          :style="{
          backgroundImage: `url(${item.profilePicUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
      }"></div>

      <!-- Lock Icon in the Center -->
      <div class="flex absolute z-30 inset-0 justify-center items-center">
        <h1 class="text-[50px] text-center">🔒</h1>
      </div>

    </Slide>
  </Carousel>
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
}

.slide-item {
  margin: 0; /* Remove margin */
}

/* Optional: Adjust blur intensity for smaller screens */
@media (max-width: 768px) {
  .blur-[5px] {
  blur: 2px;
}
}
</style>
