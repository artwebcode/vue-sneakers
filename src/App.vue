<script setup>
import Header from '@/components/header/Header.vue'

// axios.get('https://604781a0efa572c1.mokky.dev/items').then((res) => {
//   console.log('axios', res.data)
// })

// try {
//   products.value = await fetch(`https://604781a0efa572c1.mokky.dev/items`)
//     .then((res) => res.json())
//     .then((data) => data)
// } catch (error) {
//   console.log(error)
// }
</script>

<template>
  <main class="main container">
    <Header />

    <RouterView />
  </main>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.main {
  border-radius: vc(20);
  background: $color-white;
  margin: vc(85) auto;
}
</style>
