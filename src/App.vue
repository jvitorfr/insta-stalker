<template>
  <div id="app">
    <ResultComponent />
  </div>
</template>

<script>
import ResultComponent from './components/ResultComponent.vue';

export default {
  name: 'App',
  components: {
    ResultComponent,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@import "~bootstrap/scss/bootstrap.scss";

</style>
