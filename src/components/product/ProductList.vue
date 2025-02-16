<script setup>
import ProductItem from '@/components/product/ProductItem.vue'

defineProps({
  products: Array,
})
</script>

<template>
  <div class="list">
    <ProductItem v-for="item in products" :item="item" :key="item.id" />
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.list {
  display: flex;
  flex-wrap: wrap;
  gap: vc(40);
}
</style>
