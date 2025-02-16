<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Product from '@/components/product/Product.vue'

const API = 'https://f0ad98f34d87a789.mokky.dev'

const API_PRODUCTS = `${API}/products`

const products = ref([])

const getData = async () => {
  const params = {
    sortBy: filters.sortBy,
  }

  if (filters.searchQuery) {
    params.title = `*${filters.searchQuery}*`
  }

  const { data } = await axios.get(API_PRODUCTS, {
    params,
  })

  products.value = data
}

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const updateSortBy = (value) => {
  filters.sortBy = value
}

const updateSearchQuery = (value) => {
  filters.searchQuery = value
}

watch(filters, getData)

onMounted(getData)

provide('updateFilter', {
  updateSortBy,
  updateSearchQuery,
})
</script>

<template>
  <Product :products="products" />
</template>

<style scoped lang="scss"></style>
