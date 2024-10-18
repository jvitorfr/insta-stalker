<template>
  <div class="row mt-4">
    <div class="col-md-6 mb-3" v-for="(item, index) in cards" :key="index">
      <div class="card h-100 border rounded-lg shadow-sm">
        <div class="card-body text-center p-4 pt-2 pb-0">
          <h1 class="display-1">🔒</h1>
        </div>
        <div class="card-body text-center p-4">
          <h4 class="card-title font-weight-bold text-wrap text-xl">
            <b> {{ item.title }}</b>
          </h4>
          <p class="card-text mt-2">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <p class="fst-italic mt-4 fw-semibold text-danger">
      ... e mais
    </p>

    <h3 class="fst-italic mt-4 fw-semibold text-danger">
      Dísponivel por tempo limitado.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'SecretCards',
  data() {
    return {
      cards: [
        {
          title: '[SECRETO]',
          description: 'Visitou seu perfil\n12 vezes ontem',
          showProgress: false,
        },
        {
          title: '[SECRETO]',
          description: 'Visitou seu perfil de madrugada',
          showProgress: false,
        },
        {
          title: '[SECRETO]',
          description: 'Colocou apenas você nos melhores amigos',
          showProgress: false,
        },
        {
          title: '[SECRETO]',
          description: 'Entrou na DM de vocês hoje',
          showProgress: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-title {
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
}

.card-text {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
}

.display-1 {
  font-size: 50px;
}
</style>
