<template>
  <div class="layout">
    <header class="py-5" v-if="!stepFour">
      <div class="container">
        <ProgressBar :bgColor="'#FEFEE2'" :progressBarColor="'#EF4444'" :completed="completed"/>
      </div>
    </header>
    <h1 style="text-align: center" v-if="stepOne"> Descubra em 1 minuto <br/> quem ainda te ama e quem te odeia </h1>
    <Cards :cards="initialCards" v-if="stepOne"/>
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
       <p> Liberamos apenas UMA PRÉVIA por aparelho.</p>
        <div class="container">
               <Cards :cards="finalCards"/>
        </div>
      <h2 class="mt-4"> Prints recuperados de pessoas que te conhecem:</h2>
      <ul class="mt-4" style="font-size: 20px; text-align: center; padding: 0;">
        <li>  </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Entre seus seguidores </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/>  Amigas(os) de seus seguidores </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Fingem ser seus amigos </li>
        <li> <img src="@/assets/images/check.svg" alt="check"/> Que tem interesse em você </li>
        <li> <img src="@/assets/images/check.svg"
                  alt="check"/>  Moram em  <b>  {{ this.location.city || 'Brasil' }} </b></li>
      </ul>
        <span v-if="userInformation.stories_list && userInformation.stories_list.length > 0">
                   <h2 class="mt-5"> Atividade nos stories </h2>

              <StoriesList :insta-name="instaName" :profile-picture="user.data.profile_pic_url"
                           :items="userInformation.stories_list"/>
        </span>
        <span v-if="userInformation.data && userInformation.data.length > 0">
                   <h2 class="mt-5"> Reviram seus stories entre 1 e 4 vezes: </h2>

              <ProfilesList :autoplay="6000" :random_number="Math.floor(Math.random() * 21)"
                            :items="userInformation.data"/>
        </span>
        <span v-if="userInformation.data && userInformation.data.length > 0">
                   <h2 class="mt-5"> Visitaram seu perfil essa semana de 2 a 7 vezes:</h2>

              <ProfilesList :autoplay="3000" :random_number="Math.floor(Math.random() * 4)"
                            :items="randomProfileList"/>
        </span>
        <SecretCards/>
      </span>
    </main>

    <footer class="bg-white">
      <div class="d-grid gap-2 text-center" v-if="stepOne || stepThree">
        <button class="btn btn-danger btn-lg" :disabled="!instaName" @click="changeStep()">
          {{ 'Continuar' }}
        </button>
      </div>

      <div class="d-grid gap-2 text-center mt-4" v-if="stepThree">
        <button class="btn btn-outline-dark btn-lg" @click="backStep()">
          {{ 'Não, quero corrigir.' }}
        </button>
      </div>

      <div class="d-grid gap-2 text-center" v-if="stepFive">
        <button class="btn btn-danger btn-lg" :disabled="!instaName" @click="changeStep()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-eye mr-[10px]">
            <path
                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {{ 'Ver Relatório Completo' }}
        </button>
      </div>
    </footer>

  </div>
</template>

<script>
import {ref} from "vue";
import ProgressBar from "./ProgressBar.vue";
import StoriesList from "./StoriesList.vue";
import InitialStep from "./InitialStep.vue";
import requestService from '../services/request-service';
import ProfilesList from './ProfilesList.vue';
import SecretCards from "./SecretCards.vue";
import Cards from "./Cards.vue";


export default {
  name: "ResultComponent",
  components: {
    SecretCards,
    Cards,
    ProfilesList,
    StoriesList,
    InitialStep,
    ProgressBar,
  },
  setup() {
    const initialCards = [
      {title: "Quem não te tira os olhos", description: "Reviu seus stories mais que 3 vezes"},
      {title: "Quem não te esquece", description: "Diz que superou mas visitou seu perfil 3x hoje"},
      {title: "Quem não te tira da boca", description: "Seus seguidores que mais te mencionaram"},
      {title: "Quem tá te querendo", description: "Quem passou mais tempo vendo seu perfil"},
    ];

    const itemsToTest = [
      {mediaUrl: 'https://det-insta-backend-new5.isaqueheider.com/images/1729202471979-b855561160c5.jpg'},
      {mediaUrl: 'https://det-insta-backend-new5.isaqueheider.com/images/1729202472070-737ed9b81b0a.jpg'},
      {mediaUrl: 'https://det-insta-backend-new5.isaqueheider.com/images/1729202471995-a3fd15c1c393.jpg'}];

    const finalCards = [
      {
        title: '',
        description: '12% dos seus seguidores apresentam sinais de interesse amoroso',
        show_progress : true,
        progress : 12,
      },
      {
        title: '',
        description: 'Você é bem vista(o) por 49% dos seus seguidores',
        show_progress : true,
        progress : 49,
      },
      {
        title: '15 pessoas',
        description: 'visitaram seu perfil nos últimos dias',
        show_progress : false,
      },
      {
        title: '5 conversas',
        description: 'contém seu nome, 3 positivas e 2 negativas',
        show_progress : false,
      },
    ];

    const instaName = ref('jjv.rb');
    const step = ref(1);
    const completed = ref(0);
    completed.value = 20;
    const user = ref([]);
    const userInformation = ref([]);
    const location = ref([]);
    const showFollowers = ref(false);
    return {
      user,
      location,
      itemsToTest,
      initialCards,
      finalCards,
      userInformation,
      showFollowers,
      step,
      instaName,
      completed
    };
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
    },
    randomProfileList() {
      if (!this.userInformation.data) {
        return [];
      }

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      return shuffleArray(this.userInformation.data);
    },
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

ul {
  list-style-type: none;
}


@media (max-width: 768px) {
  /*.cards-container {*/
  /*  grid-template-columns: repeat(2, minmax(120px, 1fr));*/
  /*}*/
  .rounded-circle {
    width: 200px;
    height: 200px;
  }
}


@media (max-width: 480px) {
  /*.cards-container {*/
  /*  grid-template-columns: repeat(2, minmax(120px, 1fr)); */
  /*}*/
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 18px;
  }

  .rounded-circle {
    width: 150px;
    height: 150px;
  }

  .vue-spinner {
    width: 70px;
    height: 70px;
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
