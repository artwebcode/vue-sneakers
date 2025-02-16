<script setup>
  defineProps({
    item: Object
  })
</script>

<template>
  <div class="product">
    <img :src="item.imageUrl" :alt="item.title">
    <h1>{{item}}</h1>
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.product {
  position: relative;
  border-radius: vc(14);
  border: 1px solid #F3F3F3;
  padding: vc(30) vc(30) vc(34);
  width: vc(210);
}
</style>
