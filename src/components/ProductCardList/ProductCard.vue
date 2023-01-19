<template>
  <div class="product-card">
    <div class="product-card__top-section">
      <p class="product-card__name">{{ name }}</p>
      <img class="product-card__image" :src="picture" alt="" />
    </div>
    <div class="product-card__bottom-section">
      <p class="product-card__description">{{ description }}</p>
      <div class="product-card__prices">
        <p v-if="!showDiscounted" class="product-card__active-price">Price: {{ roundedPrice }} €</p>
        <p v-if="discount.status && showDiscounted" class="product-card__discount-price">
          Price discounted: {{ discountedPrice }} €
        </p>
        <p class="product-card__stock">Units in stock: {{ stock }}</p>
        <p class="product-card__category">Category: {{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ProductCard",
  components: {},
  props: {
    name: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    discount: {
      type: Object,
      default: () => {
        return {
          status: false,
          value: 0,
        };
      },
    },
    showDiscounted: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const roundedPrice = computed(
      (): number => Math.round(props.price * 100) / 100
    );

    const discountedPrice = computed((): number =>
      props.discount && props.discount.status === true
        ? props.discount.value
        : 0
    );

    const crossedPrice = computed((): string =>
      discountedPrice.value
        ? "product-card__active-price--crossed"
        : "product-card__active-price"
    );

    return {
      roundedPrice,
      discountedPrice,
      crossedPrice,
    };
  },
});
</script>
<style lang="less">
@import "../../style/products-variables.less";

.product-card {
  background-color: @background-color;
  text-align: center;
  width: 100%;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 464px;

  &__top-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 16px 0;
  }

  &__name {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: @font-xl;
    font-weight: bold;
    text-transform: capitalize;
    padding: 18px 0 0 0;
    margin: 0;
    height: 30px;
  }

  &__image {
    max-width: 174px;
    max-height: 174px;
    height: fit-content;
    width: fit-content;
    margin: auto;
  }

  &__bottom-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 16px 16px;
    height: 190px;
    text-align: left;
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    width: 250px;
    overflow: hidden;
    font-size: @font-m;
    margin: 0;
  }

  &__active-price {
    font-weight: bold;
    padding-top: 29px;

    &--crossed {
      text-decoration: line-through;
      font-size: @font-m;
    }
  }

  &__discount-price {
    font-weight: bold;
  }

  &__stock {
    font-size: @font-m;
  }

  &__category {
    font-style: italic;
    font-size: @font-m;
  }
}
</style>
