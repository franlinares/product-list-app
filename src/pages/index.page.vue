<template>
  <div class="product-view">
  <div class="product-view__sorting-filtering">
    <SortComponent
      @products-by-minor="isSortedMinor"
      @products-by-major="isSortedMajor"
    />

    <FiltersComponent @products-by-discount="isDiscounted" @products-featured="isFeatured" @products-by-active="isActive"  />
  </div>
    <ProductCardList :products="displayedProducts" :show-discounted="showDiscounted" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, ComputedRef } from "vue";
import ProductCardList from "@/components/ProductCardList/index.vue";
import { useProductsStore } from "../composables/useProductsStore";
import FiltersComponent from '@/components/Filter/index.vue'
import SortComponent from "@/components/Sort/SortComponent.vue";
import { Products } from "@/interfaces/products";

export default defineComponent({
  name: "ProductView",
  components: { ProductCardList, SortComponent, FiltersComponent },
  setup() {
    const {
      fetchProducts,
      getProductsList,
      getProductsSortedMinor,
      getProductsSortedMajor,
      getProductsWithDiscount,
      getProductsActive,
      getProductsFeatured
    } = useProductsStore();

    onMounted(() => {
      fetchProducts();
    });

    let showSortedMinor = ref<boolean>(false);
    let showSortedMajor = ref<boolean>(false);
    let showDiscounted = ref<boolean>(false);
    let showFeatured = ref<boolean>(false);
    let showActive = ref<boolean>(false);

    const products: ComputedRef<Products[]> = computed(
      () => getProductsList.value
    );

    const productsSortedMinor: ComputedRef<Products[]> = computed(
      () => getProductsSortedMinor.value
    );

    const productsSortedMajor: ComputedRef<Products[]> = computed(
      () => getProductsSortedMajor.value
    );

    const productsWithDiscount: ComputedRef<Products[]> = computed(
      () => getProductsWithDiscount.value
    );

    const productsActive: ComputedRef<Products[]> = computed(
      () => getProductsActive.value
    );

    const productsFeatured: ComputedRef<Products[]> = computed(
      () => getProductsFeatured.value
    );

    console.log(productsActive)

    const isSortedMinor = () => {
      showSortedMinor.value = true;
      showSortedMajor.value = false;
    };

    const isSortedMajor = () => {
      showSortedMajor.value = true;
      showSortedMinor.value = false;
    };

    const isDiscounted = () => {
      showDiscounted.value = true;
    };

    const isFeatured = () => {
      showFeatured.value = true;
    };

    const isActive = () => {
      showActive.value = true;
    };

    const displayedProducts = computed((): Products[] => {
      switch(true) {
        case showSortedMinor.value:
          return productsSortedMinor.value;
        case showSortedMajor.value:
          return productsSortedMajor.value;
        case showDiscounted.value:
          return productsWithDiscount.value;
        case showFeatured.value:
          return productsFeatured.value;
        case showActive.value:
          return productsActive.value;
        default: 
          return products.value
      }
    });

    return {
      products,
      productsSortedMinor,
      productsWithDiscount,
      productsActive,
      productsFeatured,
      displayedProducts,
      showSortedMinor,
      showSortedMajor,
      showDiscounted,
      showFeatured,
      showActive,
      isSortedMinor,
      isSortedMajor,
      isDiscounted,
      isFeatured,
      isActive
    };
  },
});
</script>
<style scoped lang="less">
.product-view {
  height: 100vh;
  max-width: 1436px;
  margin: 0 auto;

  &__sorting-filtering {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
