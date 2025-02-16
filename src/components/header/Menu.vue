<script setup>
import FavoritesIcon from '@/components/icons/FavoritesIcon.vue'
import CartAmount from '@/components/header/CartAmount.vue'
</script>

<template>
  <div class="menu">
    <CartAmount />

    <RouterLink to="/favorites" class="menu__link">
      <div class="menu__icon">
        <FavoritesIcon />
      </div>
      Избранное
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.menu {
  display: flex;
  align-items: center;
  gap: vc(32);

  &__link {
    display: flex;
    align-items: center;
    font-size: vc(14);
    line-height: vc(17);
    color: #5c5c5c;
  }

  &__icon {
    width: vc(18);
    height: vc(18);
    margin-right: vc(7);
  }
}
</style>
