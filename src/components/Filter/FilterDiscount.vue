<template>
  <div class="filter-discount">
    <a class="filter-discount__link" @click="discountedProducts" >Discounted </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterDiscount',

  emits: ['productsByDiscount'],
  setup(props, { emit }) {

    const discountedProducts = () => {
      emit('productsByDiscount', true);   
    };

    return {
      discountedProducts
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.filter-discount {
  display: flex;
  align-items: center;
  
  &__link {
    font-size: @font-xl;
    cursor: pointer;
    padding-left: 4px;

    &:active, &:visited {
      font-weight: bold;
      text-decoration-line: underline;
    }
  }
}
</style>

