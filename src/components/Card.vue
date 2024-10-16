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
  max-width: 300px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: max-width 0.3s ease, font-size 0.3s ease;
}

.card-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.card-body p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .card {
    max-width: 250px;
  }

  .card-header h3 {
    font-size: 1rem;
  }

  .card-body p {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .card {
    max-width: 200px;
  }

  .card-header h3 {
    font-size: 0.9rem;
  }

  .card-body p {
    font-size: 0.8rem;
  }
}
</style>
