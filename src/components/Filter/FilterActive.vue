<template>
  <div class="filter-active">
    <a class="filter-active__link" @click="activeProducts" >Active </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterActive',

  emits: ['productsByActive'],
  setup(props, { emit }) {

    const activeProducts = () => {
      emit('productsByActive', true);   
    };

    return {
      activeProducts
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.filter-active {
  display: flex;
  align-items: center;
  
  &__link {
    font-size: @font-xl;
    cursor: pointer;
    padding-left: 4px;
  }
}
</style>

