<template>
  <div class="filter-featured">
    <a class="filter-featured__link" @click="featuredProducts" >Featured </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeaturedComponent',

  emits: ['productsFeatured'],
  setup(props, { emit }) {

    const featuredProducts = () => {
      emit('productsFeatured', true);  
    };

    return {
      featuredProducts
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.filter-featured {
  display: flex;
  align-items: center;
  
  &__link {
    font-size: @font-xl;
    cursor: pointer;
    padding-left: 4px;
  }
}
</style>

