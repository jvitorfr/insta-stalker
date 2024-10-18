<template>
  <Carousel
      class="mt-3"
      v-if="items !== undefined"
      :items-to-show="2.1"
      :wrap-around="true"
      :mouse-drag="false"
      :touch-drag="false"
      :autoplay="3000"
  >
    <Slide
        v-for="(item, index) in items"
        :key="index"
        class="slide-item position-relative flex-1"
    >
      <div
          class="stories rounded-xl carousel__item"
          :style="{
          backgroundImage: `url(${item.mediaUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }"
      ></div>

      <small
          class="position-absolute text-right text-white story-lock"
          style="z-index: 10; bottom: 15px; right: 32px;"
      >
        <strong>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-lock mb-1 me-1"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span class="text-xl">{{ randomProfiles[index] }}</span> perfis
        </strong>
        <br />
        {{ randomActions[index] }}
      </small>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'StoriesList',
  data() {
    return {
      randomProfiles: [],
      randomActions: [],
      actionsPool: ['tiraram print', 'encaminharam o story', 'silenciaram o story'],
    };
  },
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
  created() {
    this.initializeData();
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomUniqueAction() {
      if (this.actionsPool.length === 0) {
        this.resetActionsPool();
      }
      const randomIndex = Math.floor(Math.random() * this.actionsPool.length);
      return this.actionsPool.splice(randomIndex, 1)[0]; // Remove and return the action
    },
    resetActionsPool() {
      this.actionsPool = ['tiraram print', 'encaminharam o story', 'silenciaram o story'];
    },
    initializeData() {
      for (let i = 0; i < this.items.length; i++) {
        this.randomProfiles.push(this.getRandomNumber(2, 10));
        this.randomActions.push(this.getRandomUniqueAction());
      }
    },
  },
  components: {
    Carousel,
    Slide,
  },
});
</script>

<style scoped>
.carousel__item {
  width: 100%; /* Occupy full width of the parent */
  height: 60vh; /* Use viewport height to make it responsive */
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px; /* Default font size */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.story-lock {
  z-index: 10;
  bottom: 15px;
  right: 32px;
}


@media (max-width: 768px) {
  .carousel__item {
    height: 40vh; /* Adjust height for smaller screens */
    font-size: 18px; /* Smaller font size */
  }

  .rounded-circle {
    width: 30px; /* Smaller profile picture */
    height: 30px; /* Smaller profile picture */
  }

  .text-xl {
    font-size: 16px; /* Smaller text size */
  }

  .story-lock {
    z-index: 10;
    bottom: 15px;
    right: 32px;
  }
}

@media (max-width: 576px) {
  .story-lock {
    z-index: 10;
    bottom: 15px;
    right: 32px;
  }

}

.carousel__slide {
  padding: 0;
  margin: 0;
}

.slide-item {
  margin: 0; /* Remove margin */
}
</style>
