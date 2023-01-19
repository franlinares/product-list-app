<template>
  <div class="filter-discount">
    <p class="filter-discount__text">Filter by discount:</p>
    <div class="filter-discount__switch-container">
      <a
        tabindex="0"
        @keyup.space="handleClick"
        @keyup.enter="handleClick"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="{ focused: isFocused }"
        class="filter-discount__link"
        @click="discountedProducts"
      >
        <label for="name" class="filter-discount__switch">
          <input id="name" type="checkbox" />
          <span class="filter-discount__slider filter-discount__round"></span>
        </label>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FilterDiscount",

  emits: ["productsByDiscount", "productWithoutDiscount"],
  setup(props, { emit }) {
    const isFocused = ref<boolean>(false);

    const discountedProducts = () => {
      emit("productsByDiscount", true);
      emit("productWithoutDiscount", true);
    };

    const handleClick = () => {
      console.log("Button clicked");
    };

    return {
      discountedProducts,
      handleClick,
      isFocused,
    };
  },
});
</script>

<style lang="less">
@import "../../style/products-variables.less";
@import "../../style/media-queries.less";

.filter-discount {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;

  &__link {
    text-decoration: none;
  }

  &__text {
    padding-right: 8px;
    font-size: @font-xxl;
    font-weight: bold;

    @media @m-query-mobile {
      font-size: @font-l;
    }
  }

  &__switch-container {
    display: flex;
    align-items: center;
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  &__switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: @slider-color;
    transition: 0.4s;
  }

  &__slider:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 0;
    bottom: 0;
    background-color: @white-color;
    transition: 0.4s;
  }

  input:checked + &__slider {
    background-color: @informative-color;
  }

  input:checked + &__slider:before {
    transform: translateX(26px);
  }

  input:checked + &__round {
    border: 1px solid @informative-color;
  }

  &__round {
    border-radius: 24px;
    border: 1px solid @slider-color;
  }

  &__round:before {
    border-radius: 50%;
    border: 1px solid @slider-color;
  }
}
</style>
