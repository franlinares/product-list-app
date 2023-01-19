import { computed } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';

export const useProductsStore = () => {

  const store = useStore<StateInterface>();
  return {
      // State
      products: computed( () => store.state.products),

      // Getters
      getProductsList: computed( () => store.getters['products/getProductsList']),
      
      getProductsSortedMinor: computed( () => store.getters['products/getProductsSortedMinor']),

      getProductsSortedMajor: computed( () => store.getters['products/getProductsSortedMajor']),

      getProductsWithDiscount: computed( () => store.getters['products/getProductsWithDiscount']),

      getProductsSortedByDiscount: computed( () => store.getters['products/getProductsSortedByDiscount']),

      getProductsActive: computed( () => store.getters['products/getProductsActive']),

      getProductsFeatured: computed( () => store.getters['products/getProductsFeatured']),

      // Actions
      fetchProducts: () => store.dispatch('products/fetchProducts'),
  }
}