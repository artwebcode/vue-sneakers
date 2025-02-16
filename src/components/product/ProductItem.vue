<script setup>
import IconPlus from '@/components/icons/IconPlus.vue'

defineProps({
  item: Object,
})
</script>

<template>
  <div class="product">
    <img :src="item.imageUrl" :alt="item.name" />
    <p class="product__title">
      {{ item.name }}
    </p>
    <div class="product__bottom">
      <div class="product-price">
        <p class="product-price__name">Цена:</p>
        <div class="product-price__value">{{ item.price }} руб.</div>
      </div>
      <div class="product__add">
        <IconPlus />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.product {
  position: relative;
  border-radius: vc(18);
  border: 1px solid #f3f3f3;
  padding: vc(30) vc(30) vc(34);
  width: vc(210);

  &__title {
    font-size: vc(14);
    line-height: vc(17);
    color: #000000;
    margin-bottom: vc(14);
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: vc(32);
    height: vc(32);
    border-radius: vc(8);
    border: 1px solid #f2f2f2;

    svg {
      width: vc(11);
      height: vc(11);
    }
  }

  &-price {
    display: flex;
    flex-direction: column;

    &__name {
      font-weight: 500;
      font-size: vc(11);
      line-height: vc(13);
      text-transform: uppercase;
      color: #bdbdbd;
    }

    &__value {
      font-weight: 700;
      font-size: vc(14);
      line-height: vc(17);
      color: #000000;
    }
  }
}
</style>
