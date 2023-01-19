<template>
  <div class="sort-component">
    <p class="sort-component__text">Sort: </p>

    <a v-if="isClicked" class="sort-component__link" @click="sortedDownSelected" >Price <span v-html="downArrow"></span> </a>

    <a v-else class="sort-component__link" @click="sortedUpSelected" >Price <span v-html="upArrow"></span> </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SortComponent',
  emits: ['productsByMinor', 'productsByMajor'],
  setup(props, { emit }) {
    const isClicked = ref<boolean>(true);
    const downArrow = '↓';
    const upArrow = '↑';

    const sortedDownSelected = () => {
      isClicked.value = false;
      emit('productsByMinor', true);  
    };

    const sortedUpSelected = () => {
      isClicked.value = true;
      emit('productsByMajor', true);
    };

    return {
      sortedDownSelected,
      sortedUpSelected,
      downArrow,
      upArrow,
      isClicked
    }
  }
});
</script>

<style lang="less">
@import "../../style/products-variables.less";

.sort-component {
 display: flex;
 justify-content: flex-end;
 align-items: center;

  &__text {
    padding-right: 8px;
    font-size: @font-xl;
  }

  &__link {
    font-size: @font-xl;
    cursor: pointer;
    padding-right: 15px;
  }
}
</style>