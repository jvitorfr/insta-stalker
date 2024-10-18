<template>
  <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 cards-container">
    <div class="col" v-for="(card, index) in cards" :key="index">
      <div class="card h-100 border bg-light shadow-sm rounded-lg">
        <div class="card-body text-center">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">{{ card.description }}</p>
          <span class="d-flex justify-content-center" v-if="card.show_progress"> <CircleProgress :completed-steps="card.progress"  /> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from "./CircleProgress.vue";
export default {
  name: 'Cards',
  components: {CircleProgress},
  props: {
    cards: []
  }
};
</script>

<style scoped>
.cards-container {
  /*max-width: 300px;*/
}
.card {
  padding: 20px;
  background-color: var(--bs-white);
  border-radius: 10px;
  text-align: center;
}
.card-title {
  font-weight: bold;
  font-size: 22px;
}
.card-text {
  margin-top: 10px;
  font-size: 18px;
}

</style>
