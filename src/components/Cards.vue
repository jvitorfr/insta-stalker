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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

.card {
  width: 100%;
  max-width: 470px;
  height: 200px;
  margin: 0.5rem;
  background-color: var(--bs-white);
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

/*!* Media Queries *!*/
@media (max-width: 540px) {
  .cards-container{
    max-width: 115%
  }

  .card-title {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
    padding-top: 5px;
    height: 0;
  }

  .card {
    height: auto;
    min-height: 150px;
    width: 100%;
  }

  .card-body {
    display: inline-grid;
    padding: 12px;
    height: 100%;
  }
  .card-text {
    height: 0;
    font-size: 12px;
  }
}

@media (max-width: 375px) {
  .card {
    height: auto;
    min-height: 182px;
    width: 114%;
  }

  .card-body {
    display: inline-grid;
    padding: 11px;
    height: 100%;
  }

}
</style>
