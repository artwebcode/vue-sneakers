<script setup>
import { inject } from 'vue'

const { updateSortBy } = inject('updateFilter')
</script>

<template>
  <select @change="(e) => updateSortBy(e.target.value)" class="select">
    <option value="name">По названию</option>
    <option value="price">По цене (дешевые)</option>
    <option value="-price">По цене (дорогие)</option>
  </select>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.select {
  border-radius: vc(10);
  border: 1px solid #f3f3f3;
  padding: vc(15) vc(18);
  width: vc(250);
}
</style>
