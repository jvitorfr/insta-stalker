<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-header h3 {
  margin: 0;
  font-size: 1.2rem;
}
.card-body p {
  margin: 0.5rem 0 0;
}
</style>
