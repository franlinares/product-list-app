<template>
  <div class="sort-component">
    <p class="sort-component__text">Sort:</p>

    <a
      v-if="isClicked"
      tabindex="0"
      class="sort-component__link"
      @click="sortedDownSelected"
      >Price <span v-html="downArrow"></span>
    </a>

    <a
      v-else
      tabindex="0"
      class="sort-component__link"
      @click="sortedUpSelected"
      >Price <span v-html="upArrow"></span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SortComponent",
  emits: ["productsByMinor", "productsByMajor"],
  setup(props, { emit }) {
    const isClicked = ref<boolean>(true);
    const downArrow = "↓";
    const upArrow = "↑";

    const sortedDownSelected = () => {
      isClicked.value = false;
      emit("productsByMinor", true);
    };

    const sortedUpSelected = () => {
      isClicked.value = true;
      emit("productsByMajor", true);
    };

    return {
      sortedDownSelected,
      sortedUpSelected,
      downArrow,
      upArrow,
      isClicked,
    };
  },
});
</script>

<style lang="less">
@import "../../style/products-variables.less";
@import "../../style/media-queries.less";

.sort-component {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__text {
    padding-right: 8px;
    font-size: @font-xxl;
    font-weight: bold;

    @media @m-query-mobile {
      font-size: @font-l;
    }
  }

  &__link {
    font-size: @font-xxl;
    cursor: pointer;
    padding-right: 15px;

    @media @m-query-mobile {
      font-size: @font-l;
    }

    &:hover {
      color: @informative-color;
    }
  }
}
</style>
