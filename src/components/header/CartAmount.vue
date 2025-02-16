<script setup>
import CartIcon from '@/components/icons/CartIcon.vue'


</script>

<template>
  <div class="amount">
    <div class="amount__icon">
      <CartIcon />
    </div>

    <div class="amount__text">
      1205 руб.
    </div>
  </div>


</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.amount {
  display: flex;
  align-items: center;

  &__icon {
    width: vc(18);
    height: vc(18);
    margin-right: vc(10);
  }

  &__text {
    font-weight: 600;
    font-size: vc(14);
    line-height: vc(17);
    color: #5C5C5C;
  }
}
</style>
