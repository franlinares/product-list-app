<template>
  <header class="header">
    <nav>
     
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>
<style lang="less">
@import "../../style/products-variables.less";
@import "../../style/media-queries.less";

.header {
  height: 75px;
  background: lightgray;
}
</style>

