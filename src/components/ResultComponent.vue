<template>
  <div class="layout">

    <header class="py-5" v-if="!stepFour && !stepFive">
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
                style="width: 250px; height: 250px; background-image: url('https://phosphor.ivanenko.workers.dev/?url=https%3A//scontent-lhr6-2.cdninstagram.com/v/t51.2885-19/437511173_751067263832044_6537215531663962691_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dscontent-lhr6-2.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DC1_5T_ghZasQ7kNvgEbCzQW%26_nc_gid%3Da832685d092e46319807da21823e126e%26edm%3DAO4kU9EBAAAA%26ccb%3D7-5%26oh%3D00_AYAa0hCeprgqowBIz8PPyJtSBXsz2Hy5Nxy0iMv5RyTt9Q%26oe%3D6715D99F%26_nc_sid%3D164c1d'); background-size: cover; background-position: center center; border-radius: 50%;">
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
        {{ this.user.data.full_name }} </h1>
      <h2 v-if="stepThree" class="container mt-5"> Podemos presseguir? </h2>

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


      </span>

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
import InitialStep from "../components/InitialStep.vue";
import requestService from '../services/request-service';

export default {
  name: "ResultComponent",
  components: {
    InitialStep,
    Card,
    ProgressBar,
  },
  setup() {
    const instaName = ref('jjv.rb');
    const step = ref(1);
    const completed = ref(0);
    completed.value = 25;
    const user = ref([]);
    const userInformation = ref([]);
    const showFollowers = ref(false);
    return {user, userInformation, showFollowers, step, instaName, completed};
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
        this.completed = 50;
      }

      if (this.stepTwo) {
        const verifyNewUser = async () => {
          try {
            const response = await requestService.post('/verify-user-new', {ig: this.instaName});
            console.log(response);
            this.user = response.data;
            this.completed = 75;
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
            const response = await requestService.post('/get-preview-result-new', {
              isPrivate: this.user.isPrivate,
              userId: this.user.data.id
            });
            this.user = response.data;
            this.completed = 100;
            this.step = 5;
          } catch (error) {
            console.error('Erro ao obter informações:', error);
          }
        };
        getPreviewUserNew();
      }


    },
    backStep() {
      this.completed = 25;
      this.step = 1;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 1;
      done();
    },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
