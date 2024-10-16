<template>
  <div class="container" :style="{ backgroundColor : '#FEE2E2'}">
    <div :style="fillerStyles">
<!--      <span class="label">{{ `${completed}%` }}</span>-->
      <span class="label">{{ }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ProgressBar",
  props: {
    bgColor: String,
    progressBarColor: String,
    completed: Number,
  },
  setup(props) {
    const fillerStyles = computed(() => {
      return {
        height: "100%",
        width: `${props.completed}%`,
        backgroundColor: props.progressBarColor,
        color: props.progressBarColor,
        transition: "width 1s ease-in-out",
        borderRadius: "inherit",
        textAlign: "right",
      };
    });

    return { fillerStyles };
  },
};
</script>

<style scoped>
.container {
  height: 9px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
}

.label {
  padding: 5px;
  color: white;
  font-weight: bold;
}
</style>
