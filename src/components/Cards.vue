<template>
  <div class="row g-4 mt-5 cards-container">
    <div class="col-6" v-for="(card, index) in cards" :key="index">
      <div class="card border bg-white shadow-sm rounded-lg">
        <div class="card-body text-center">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">{{ card.description }}</p>
          <span class="d-flex justify-content-center" v-if="card.show_progress">
            <CircleProgress :completed-steps="card.progress" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from "./CircleProgress.vue";
export default {
  name: 'Cards',
  components: { CircleProgress },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.cards-container {
  /* Mantenha a largura da caixa e adicionar um espaço adequado */
  max-width: 100%; /* Mantenha a largura máxima 100% */
}

.card {
  height: auto;
  min-height: 150px;
  padding: 20px;
  background-color: var(--bs-white);
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
}

.card-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.card-text {
  margin-top: 10px;
  font-size: 16px;
}

@media (max-width: 600px) {
  .card {
    font-size: 14px;
    min-height: 180px;
    padding: 0;
  }
  .card-body {
    padding-top: 10px;
  }

  .cards-container{
    max-width: 130%;
  }

  .card-title {
    font-size: 14px;
  }

  .card-text {
    font-size: 13px;
  }
}
</style>
