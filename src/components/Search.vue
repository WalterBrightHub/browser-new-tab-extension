<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const copyLink = ref('')

const copyLinkUrl=computed(()=>/^(((ht|f)tps?):\/\/)/.test(copyLink.value)?copyLink.value:'//'+copyLink.value)

onMounted(() => {
  axios('/api/weibo')
  navigator.clipboard.readText().then(text => {
    if (/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(text)) {

      copyLink.value = text
    }
  })
})
</script>

<template>
  <div class="component-search">
    <div class="copy-link-wrapper">
      <transition name="link">
      <a class="copy-link" :href="copyLinkUrl"  v-if="copyLink">转到复制的链接：{{ copyLink }}</a>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-search {
  margin: 0 auto;
}

.copy-link-wrapper {
  height: 48px;
  display: flex;
  justify-content: center;
}

.copy-link{
  line-height: 48px;
  text-decoration: none;
  color: #fff;
  background-color: #4aa3ff;
  border-radius: 48px;
  display: block;
  padding: 0 2em;
}

.link-enter-active,
.link-leave-active{
  transition: all 0.3s;
}

.link-enter-from,
.link-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
</style>