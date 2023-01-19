<template>
  <div class="product-view">
    <HeaderComponent />
    <div class="product-view__sorting-filtering">
      <SortComponent
        @products-by-minor="isSortedMinor"
        @products-by-major="isSortedMajor"
      />
      <FilterDiscount @products-by-discount="isDiscounted" />
    </div>
    <ProductCardList
      :products="displayedProducts"
      :show-discounted="showDiscounted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, ComputedRef } from "vue";
import ProductCardList from "@/components/ProductCardList/index.vue";
import { useProductsStore } from "../composables/useProductsStore";
import SortComponent from "@/components/Sort/SortComponent.vue";
import FilterDiscount from '@/components/Filter/FilterDiscount.vue';
import { Products } from "@/interfaces/products";
import HeaderComponent from "@/components/header/index.vue"

export default defineComponent({
  name: "ProductView",
  components: { ProductCardList, SortComponent, FilterDiscount, HeaderComponent },
  setup() {
    const {
      fetchProducts,
      getProductsList,
      getProductsSortedMinor,
      getProductsSortedMajor
    } = useProductsStore();

    onMounted(() => {
      fetchProducts();
    });

    let showSortedMinor = ref<boolean>(false);
    let showSortedMajor = ref<boolean>(false);
    let showDiscounted = ref<boolean>(false);

    const products: ComputedRef<Products[]> = computed(
      () => getProductsList.value
    );

    const productsSortedMinor: ComputedRef<Products[]> = computed(
      () => getProductsSortedMinor.value
    );

    const productsSortedMajor: ComputedRef<Products[]> = computed(
      () => getProductsSortedMajor.value
    );

    const isSortedMinor = () => {
      showSortedMinor.value = true;
      showSortedMajor.value = false;
    };

    const isSortedMajor = () => {
      showSortedMajor.value = true;
      showSortedMinor.value = false;
    };

    const isDiscounted = (value: boolean) => {
      showDiscounted.value = value;
    };

    const displayedProducts = computed((): Products[] => {
      switch(true || false) {
        case showSortedMinor.value:
          return productsSortedMinor.value;
        case showSortedMajor.value:
          return productsSortedMajor.value;
        default:
          return products.value
      }
    });

    return {
      products,
      productsSortedMinor,
      displayedProducts,
      showSortedMinor,
      showSortedMajor,
      showDiscounted,
      isSortedMinor,
      isSortedMajor,
      isDiscounted
    };
  },
});
</script>
<style scoped lang="less">
@import "../style/products-variables.less";
@import "../style/media-queries.less";
.product-view {
  height: 100vh;
  max-width: 1436px;
  margin: 0 auto;

  &__sorting-filtering {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media @m-query-mobile {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
