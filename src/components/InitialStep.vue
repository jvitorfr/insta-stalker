<template>
  <div class="container text-center">
    <h1>Primeiro, qual é o seu perfil?</h1>
    <p>Informe seu perfil para iniciar a análise</p>
  </div>
  <div class="col col-md d-grid">
    <label for="insta_name" class="form-label"> Seu instagram  <b> (ex: Timas014) </b> </label>
    <div class="input-group">
      <span class="input-group-text" id="addon">@</span>
      <input
          id="insta_name"
          class="form-control"
          name="insta_name"
          type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-bind="$attrs"
          placeholder="Digite seu instagram"
          aria-describedby="addon"
          maxlength="30"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue";
import Card from "../components/Card.vue";

export default {
  name: "InitialStep",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  components: {
    Card,
    ProgressBar,
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style scoped>
</style>
