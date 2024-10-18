<template>
  <RadialProgress
      :diameter="150"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :stroke-width="10"
      :inner-stroke-width="15"
  >
    <span class="total-steps"> {{ completedSteps }}% </span>
  </RadialProgress>
</template>

<script>
import { ref, defineComponent } from "vue";
import RadialProgress from "vue3-radial-progress";
export default defineComponent({
  components: {RadialProgress},
  props: {
    completedSteps: {
      type: Number,
      default: 0,
    }
  },
  setup(){
    const totalSteps = ref(100);

    return {
      totalSteps
    }
  }
})
</script>
<style scoped>
.total-steps {
  font-weight: bold;
  font-size: 20px;
}
</style>
