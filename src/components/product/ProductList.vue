<script setup>
import ProductItem from '@/components/product/ProductItem.vue'
import { inject } from 'vue'

defineProps({
  products: Array,
})

const { addCart } = inject('eventsProduct')
</script>

<template>
  <div class="list">
    <ProductItem v-for="item in products" :item="item" :key="item.id" @click="addCart(item)"/>
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
