<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { inject } from 'vue'

const {updateSearchQuery} = inject('updateFilter')
</script>

<template>
  <div class="search">
    <div class="search__icon">
      <SearchIcon />
    </div>
    <input @input="(e) => updateSearchQuery(e.target.value)" class="search__input" type="text" placeholder="Поиск..." />
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/component-settings' as *;

.search {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: vc(10);
  border: 1px solid #f3f3f3;
  padding: vc(15) vc(18);
  width: vc(250);

  &__icon {
    width: vc(15);
    height: vc(15);
    margin-right: vc(13);
  }

  &__input {
    font-size: vc(14);
    line-height: vc(17);
    color: $color-black;

    &::placeholder {
      color: #c4c4c4;
    }
  }
}
</style>
