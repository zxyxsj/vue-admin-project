<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
