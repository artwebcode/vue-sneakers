<script setup>
import Menu from '@/components/header/Menu.vue'
</script>

<template>
  <header class="header">
    <a href="#" class="header__logo">
      <img class="header__img" src="../../assets/images/logo.svg" alt="Logo" />
    </a>
    <Menu />
  </header>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: vc(43) vc(60);
  border-bottom: 1px solid #eaeaea;

  &__img {
    width: vc(245);
  }
}
</style>
