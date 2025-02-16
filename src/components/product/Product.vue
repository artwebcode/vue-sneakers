<script setup>
import Search from '@/components/product/Search.vue'
import ProductList from '@/components/product/ProductList.vue'
import SelectFilter from '@/components/product/SelectFilter.vue'

defineProps({
  products: Array,
})
</script>

<template>
  <div class="body">
    <div class="header">
      <div class="header__title">Все кроссовки</div>
      <SelectFilter />
      <Search />
    </div>

    <ProductList :products="products" />
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.body {
  padding: vc(45) vc(60);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: vc(40);

  &__title {
    font-weight: 700;
    font-size: vc(32);
    line-height: vc(39);
  }
}
</style>
