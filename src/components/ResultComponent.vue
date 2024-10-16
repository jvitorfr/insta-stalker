<template>
  <div class="layout">

    <header class="bg-light py-3">
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

    <main class="content py-5">
      <div class="container text-center">
        <h1>Bem-vindo ao seu aplicativo</h1>
        <p>Aqui está o conteúdo principal.</p>
      </div>
    </main>

    <footer class="bg-white py-5">
      <div class="d-grid gap-2 text-center">
          <button class="btn btn-danger btn-lg">
            {{ 'Continuar' }}
          </button>
      </div>
    </footer>

  </div>
</template>

<script>
import {ref} from "vue";
import ProgressBar from "../components/ProgressBar.vue";
import Card from "../components/Card.vue";


export default {
  name: "ResultComponent",
  components: {
    Card,
    ProgressBar,
  },
  setup() {
    const completed = ref(0);
    // setInterval(
    //     () => (completed.value = Math.floor(Math.random() * 100) + 1),
    //     2000
    // );
    console.log(completed);
    completed.value = 25;
    return {completed};
  },
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
  padding: 20px;
}
</style>
