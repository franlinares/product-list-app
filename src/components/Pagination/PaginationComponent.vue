<template>
  <div v-if="maxPage" class="pagination-component">
    <p>Page {{ currentPage }}</p>

    <div class="pagination-component__navigation">
      <router-link
        v-if="previousPage"
        tabindex="0"
        @keyup.space="handleClick"
        @keyup.enter="handleClick"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="{ focused: isFocused }"
        :to="{ name: 'product-view', query: { page: previousPage } }"
        class="pagination-component__previous"
      >
        Previous
      </router-link>

      <router-link
        v-if="nextPage"
        tabindex="0"
        @keyup.space="handleClick"
        @keyup.enter="handleClick"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="{ focused: isFocused }"
        :to="{ name: 'product-view', query: { page: nextPage } }"
        class="pagination-component__next"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "PaginationComponent",
  components: {},
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    maxPage: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const isFocused = ref<boolean>(false);

    const previousPage = computed((): number | undefined => {
      const previousPage = props.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed((): number | undefined => {
      const nextPage = props.currentPage + 1;
      const maxPage = props.maxPage;
      return nextPage <= maxPage ? nextPage : undefined;
    });

    const handleClick = () => {
      console.log("Button clicked");
    };

    return {
      previousPage,
      nextPage,
      isFocused,
      handleClick,
    };
  },
});
</script>
<style scoped lang="less">
@import "../../style/products-variables.less";
@import "../../style/media-queries.less";
.pagination-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 8px;
  font-weight: bold;
  font-size: @font-xxl;
  margin: auto;

  @media @m-query-mobile {
    font-size: @font-l;
    justify-content: space-around;
  }

  &__previous {
    text-decoration: none;
    padding-right: 40px;
    color: @black;
  }

  &__next {
    text-decoration: none;
    color: @black;
  }
}
</style>
