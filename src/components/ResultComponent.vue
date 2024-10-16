<template>
  <div class="layout">

    <header class="py-5">
      <div class="container">
        <ProgressBar :bgColor="'#FEFEE2'" :progressBarColor="'#EF4444'" :completed="completed"/>
      </div>
    </header>

    <h1 style="text-align: center"> Descubra em 1 minuto <br/> quem ainda te ama e quem te odeia </h1>
    <div class="cards-container">
      <Card title="Quem não te tira os olhos" description="Reviu seus stories mais que 3 vezes"/>
      <Card title="Quem não te esquece" description="Diz que superou mas visitou seu perfil 3x hoje"/>
      <Card title="Quem não te tira da boca" description="Seus seguidores que mais te mencionaram"/>
      <Card title="Quem tá te querendo" description="Quem passou mais tempo vendo seu perfil"/>
    </div>

    <main class="content py-3">
    <InitialStep v-model="instaName"  :model-value="instaName"/>
    </main>

    <footer class="bg-white">
      <div class="d-grid gap-2 text-center">
        <button class="btn btn-danger btn-lg" :disabled="!instaName" >
          {{ 'Continuar' }}
        </button>
      </div>
    </footer>

  </div>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "../components/ProgressBar.vue";
import Card from "../components/Card.vue";
import InitialStep from "../components/InitialStep.vue";

export default {
  name: "ResultComponent",
  components: {
    InitialStep,
    Card,
    ProgressBar,
  },
  setup() {
    const instaName = ref('');
    const completed = ref(0);
    completed.value = 25;
    return { instaName, completed };
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh; /* Garante que o layout ocupe pelo menos 100% da altura da viewport */
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 16px;
  justify-items: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .cards-container {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}
</style>
