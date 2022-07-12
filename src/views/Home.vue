<script lang="ts" setup>

import Weather from '@/components/Weather.vue';
import Search from '@/components/Search.vue';
</script>

<template>
  <div class="home">
    <Weather/>
    <Search />
  </div>
</template>

<style lang="scss" scoped>
.home{
  padding: 15px;
}
</style>