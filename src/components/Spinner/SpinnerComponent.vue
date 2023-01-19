<template>
  <div class="spinner-component">
    <div v-if="loading" class="spinner-component__loading"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpinnerComponent',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.spinner-component {
  display: inline-block;
  position: relative;

  &__loading {
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
}
</style>