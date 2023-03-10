<template>
  <div class="product-container" v-if="displayedProducts">
    <ul class="product-card-list">  
      <li
        class="product-card-list__item-container"
        v-for="product in displayedProducts"
        :key="product.id"
      >
        <div class="product-card-list__item">
          <ProductCard
            :name="product.name"
            :picture="product.picture"
            :price="product.price"
            :stock="product.stock"
            :description="product.description"
            :discount="product.discount"
            :category="product.category"
            :show-discounted="showDiscounted"
          />
        </div>
      </li>
    </ul>

    <PaginationComponent
      v-if="displayedProducts"
      :current-page="currentPage"
      :max-page="maxPage"
    />
  </div>
  <div v-else>
    <SpinnerComponent  :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import ProductCard from "@/components/ProductCardList/ProductCard.vue";
import { useRoute } from "vue-router";
import { Products } from "@/interfaces/products";
import PaginationComponent from "@/components/Pagination/PaginationComponent.vue";
import SpinnerComponent from "@/components/Spinner/SpinnerComponent.vue";
import { useProductsStore } from "../../composables/useProductsStore";

export default defineComponent({
  name: "ProductCardList",
  components: {
    ProductCard,
    PaginationComponent,
    SpinnerComponent
  },
  props: {
    products: {
      type: Array as () => Array<Products>,
      default: () => {
        return [];
      },
    },
    showDiscounted: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const route = useRoute();
    const { getProductsWithDiscount, getProductsList } = useProductsStore();

    const productsWithDiscount: ComputedRef<Products[]> = computed(
      () => getProductsWithDiscount.value
    );

    const productsFeatured: ComputedRef<Products[]> = computed(
      () => getProductsList.value
    );

    const productsOptions = computed((): Array<Products> => {
      if (props.showDiscounted) {
        return productsWithDiscount.value;
      }else {
        return productsFeatured.value;
      }
    });

    const currentPage = computed((): number => {
      return Number(route.query.page || "1");
    });

    const maxPage = computed((): number => {
      return Math.ceil(productsOptions.value.length / 15);
    });

    const displayedProducts = computed((): Array<Products> => {
      const pageNumber = currentPage.value;
      const firstProductsIndex = (pageNumber - 1) * 15;
      const lastProductsIndex = pageNumber * 15;
      return productsOptions.value.slice(firstProductsIndex, lastProductsIndex);
    });

    const loading = computed((): boolean => (props.products ? false : true));

    return {
      displayedProducts,
      currentPage,
      maxPage,
      loading,
      productsWithDiscount,
      productsOptions,
      productsFeatured
    };
  },
});
</script>
<style lang="less">
@import "../../style/products-variables.less";
@import "../../style/media-queries.less";

@four-product-card: 1148px;
@three-product-card: 861px;
@two-product-card: 574px;
@one-product-card: 287px;

.product-container {
  margin: auto;

  .product-card-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0px;
    margin: 0;

    @media @m-query-desktop {
      margin-left: calc((100% - @four-product-card) / 2);
    }

    @media @m-query-tablet {
      margin-left: calc((100% - @three-product-card) / 2);
    }

    @media @m-query-tablet-mini {
      margin-left: calc((100% - @two-product-card) / 2);
    }

    @media @m-query-mobile {
      margin-left: calc((100% - @one-product-card) / 2);
    }

    &__item-container {
      display: flex;
      flex-direction: column;
      margin: 4px;
      width: 279px; //279px para 5
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
    }
  }

  &__item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
  }
}
</style>
