<template>
  <div class="filters">
    <p>Filter: </p>
    <FeaturedComponent @products-featured="featuredProducts"/>|
    <FilterDiscount @products-by-discount="discountedProducts" />|
    <FilterActive @products-by-active="activeProducts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterDiscount from '@/components/Filter/FilterDiscount.vue'
import FeaturedComponent from '@/components/Filter/FeaturedComponent.vue'
import FilterActive from '@/components/Filter/FilterActive.vue'

export default defineComponent({
  name: 'FiltersComponent',
  components: {FilterDiscount, FeaturedComponent, FilterActive},
  emits: ['productsByDiscount', 'productsFeatured', 'productsByActive'],
  setup(props, { emit }) {

    const discountedProducts = () => {
      emit('productsByDiscount', true);   
    };

    const featuredProducts = () => {
      emit('productsFeatured', true);  
    };

    const activeProducts = () => {
      emit('productsByActive', true);  
    };

    return {
      discountedProducts,
      featuredProducts,
      activeProducts
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.filters {
  display: flex;
  align-items: center;
}
</style>
