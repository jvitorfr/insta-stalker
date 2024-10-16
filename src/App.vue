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

html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

header, main, footer {
  width: 100%;
  text-align: center;
  padding: 10px;
}

@import "~bootstrap/scss/bootstrap.scss";

</style>
