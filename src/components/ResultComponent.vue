<template>
  <div class="layout">

    <header class="py-5" v-if="!stepFour">
      <div class="container">
        <ProgressBar :bgColor="'#FEFEE2'" :progressBarColor="'#EF4444'" :completed="completed"/>
      </div>
    </header>

    <h1 style="text-align: center" v-if="stepOne"> Descubra em 1 minuto <br/> quem ainda te ama e quem te odeia </h1>
    <div class="cards-container" v-if="stepOne">
      <Card title="Quem não te tira os olhos" description="Reviu seus stories mais que 3 vezes"/>
      <Card title="Quem não te esquece" description="Diz que superou mas visitou seu perfil 3x hoje"/>
      <Card title="Quem não te tira da boca" description="Seus seguidores que mais te mencionaram"/>
      <Card title="Quem tá te querendo" description="Quem passou mais tempo vendo seu perfil"/>
    </div>

    <main class="content py-3">
      <InitialStep v-if="stepOne" v-model="instaName" :model-value="instaName"/>
      <span v-if="stepTwo" class="container">
        <h1> Analisando... </h1>
        <h2> Estamos capturando as informações do seu perfil, aguarde alguns segundos. </h2>
        <div class="container">
              <VueSpinner size="100" color="#EF4444"/>
        </div>

      </span>

      <span v-if="stepThree">
        <div class="container d-flex flex-column align-items-center">
          <div class="rounded-circle bg-dark d-flex flex-column align-items-center justify-content-center mt-5"
               style="width: 260px; height: 260px;">
            <div
                class="border border-white rounded-circle"
                style="width: 250px; height: 250px; background-size: cover; background-position: center center; border-radius: 50%;"
                :style="{ backgroundImage: `url(${user.data.profile_pic_url})`, width: '260px', height: '260px' }"
            >
            </div>
          </div>
        </div>
      </span>

      <div v-if="stepThree"
           class="d-inline-flex align-items-center rounded-pill border-0 font-weight-bold py-1 px-2 bg-primary text-white mt-3"
           style="padding-left: 5px; padding-right: 5px;">
        @{{ instaName }}
      </div>

      <h1 v-if="stepThree" class="text-dark display-4 mt-3 text-center font-weight-bold">Olá,
        {{ this.user.data.full_name || this.instaName }}
      </h1>

      <h2 v-if="stepThree" class="container mt-5"> Podemos prosseguir? </h2>

      <span v-if="stepFour">
          <VueSpinner size="100" color="#EF4444"/>
          <h1 class="text-dark display-4 mt-3 text-center font-weight-bold"> Obtendo informações do perfil. </h1>
        <span>
           <Transition name="fade">
             <h4 v-if="showFollowers" class="container mt-5"> Seguindo: {{ this.user.data.following_count }} </h4>
           </transition>
          <Transition name="fade">
            <h4 v-if="showFollowers" class="container mt-1"> Seguidores: {{ this.user.data.follower_count }} </h4>
           </Transition>
        </span>
      </span>


      <span v-if="stepFive">
         <h1> Prévia </h1>

          <p>
             Liberamos apenas UMA PRÉVIA por aparelho.
          </p>
         <div class="cards-container">
            <Card title="" description="12% dos seus seguidores apresentam sinais de interesse amoroso"/>
            <Card title="" description="Você é bem vista(o) por 49% dos seus seguidores"/>
            <Card title="15 pessoas" description="visitaram seu perfil nos últimos dias"/>
            <Card title="5 conversas" description="contém seu nome, 3 positivas e 2 negativas"/>
        </div>



  <h2 class="mt-2"> Prints recuperados de pessoas que te conhecem:</h2>
      <ul class="mt-4" style="font-size: 20px; text-align: center; padding: 0;">
        <li>  </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Entre seus seguidores </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/>  Amigas(os) de seus seguidores </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Fingem ser seus amigos </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Que tem interesse em você </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/>  Moram em  <b>  {{ this.location.city || 'Brasil'}} </b></li>
      </ul>
              <h2  class="mt-5"> Atividade nos stories </h2>
      </span>

      <Slider :items="userInformation.stories_list" />

    </main>

    <footer class="bg-white" v-if="stepOne || stepThree">
      <div class="d-grid gap-2 text-center">
        <button class="btn btn-danger btn-lg" :disabled="!instaName" @click="changeStep()">
          {{ 'Continuar' }}
        </button>
      </div>

      <div class="d-grid gap-2 text-center mt-4" v-if="stepThree">
        <button class="btn btn-outline-dark btn-lg" @click="backStep()">
          {{ 'Não, quero corrigir.' }}
        </button>
      </div>
    </footer>

  </div>
</template>

<script>
import {ref} from "vue";
import ProgressBar from "../components/ProgressBar.vue";
import Card from "../components/Card.vue";
import Slider from "../components/Slider.vue";
import InitialStep from "../components/InitialStep.vue";
import requestService from '../services/request-service';


export default {
  name: "ResultComponent",
  components: {
    Slider,
    InitialStep,
    Card,
    ProgressBar,
  },
  setup() {
    const instaName = ref('jjv.rb');
    const step = ref(1);
    const completed = ref(0);
    completed.value = 20;
    const user = ref([]);
    const userInformation = ref([]);
    const location = ref([]);
    const showFollowers = ref(false);
    return {user, location, userInformation, showFollowers, step, instaName, completed};
  },
  computed: {
    stepOne() {
      return this.step === 1;
    },
    stepTwo() {
      return this.step === 2;
    },
    stepThree() {
      return this.step === 3;
    },
    stepFour() {
      return this.step === 4;
    },
    stepFive() {
      return this.step === 5;
    }
  },
  methods: {
    changeStep() {
      if (this.stepOne) {
        this.step = 2;
        this.completed = 40;
      }

      if (this.stepTwo) {
        const verifyNewUser = async () => {
          try {
            const response = await requestService.post('/verify-user-new', {ig: this.instaName});
            console.log(response);
            this.user = response.data;
            this.completed = 60;
            this.step = 3;
          } catch (error) {
            console.error('Erro ao obter informações:', error);
          }
        };
        verifyNewUser();

      }

      if (this.stepThree) {
        this.step = 4;

        setTimeout(() => {
          this.showFollowers = true;
        }, 2000);

        const getPreviewUserNew = async () => {
          try {
            const location = await requestService.location();
            this.location = location.data;
            const response = await requestService.post('/get-preview-result-new', {
              isPrivate: this.user.isPrivate,
              userId: this.user.data.id
            });
            this.userInformation = response.data;
            this.completed = 80;
            this.step = 5;
          } catch (error) {
            console.error('Erro ao obter informações:', error);
          }
        };
        getPreviewUserNew();
      }
    },
    backStep() {
      this.completed = 20;
      this.step = 1;
    }
  }
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

ul {
  list-style-type: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
