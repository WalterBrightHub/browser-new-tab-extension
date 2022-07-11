<script lang="ts" setup>

import { onMounted, onUnmounted, ref } from 'vue';

const progress = ref(0)


onMounted(() => {
  const delay = (time: number) => new Promise((resolve) => {
    setTimeout(resolve, time)
  })

  const addProgress = async function () {
    while (progress.value < 97) {
      await delay((1 + Math.random()) * 3000)
      progress.value += Math.floor(Math.random() * 3)
    }
    await delay(10000)
    progress.value = 100
  }
  addProgress()
})



const blueScreen = ref<Element | null>(null)

let fullScreen = false


const onClickBlueScreen = () => {
  fullScreen ?
    // @ts-ignore
    document.webkitExitFullscreen() :
    // @ts-ignore
    blueScreen.value.webkitRequestFullscreen()
  fullScreen = !fullScreen
}

</script>

<template>
  <div class="blue-screen" @click="onClickBlueScreen" ref="blueScreen">
    <div class="emoji">:(</div>
    <div class="title-list">

      <div class="title">你的设备遇到问题，需要重启。</div>
      <div class="title">我们只收集某些错误信息，然后为你重新启动。</div>
    </div>
    <div class="progress">{{ progress }}% 完成</div>
    <div class="qr-and-info-list">
      <img src="~@/assets/qr.jpg" alt="qr" class="qr">
      <div class="info-list">
        <div class="info-qr-list">

          <div class="info info-qr">有关此问题的详细信息和可能的解决方法，请访问：</div>

          <div class="info info-qr">https://www.windows.com/stopcode</div>

        </div>
        <div class="info-stopcode-list">

          <div class="info info-stopcode">如果致电支持人员，请向他们提供以下信息：</div>
          <div class="info info-stopcode">终止代码：CRTICAL PROCESS DIED</div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blue-screen {
  height: 100vh;
  box-sizing: border-box;
  font-family: '微软雅黑', sans-serif;
  padding: 17.13vh 0 0 10.83vw;
  color: #fff;
  user-select: none;
  background-color: #0078d7;
}

.emoji {
  font-size: 196px;
  line-height: 180px;
  transform: translateY(-16px);
}

.title-list {
  margin-top: 36px;
}

.title,
.progress {
  font-size: 38px;
  line-height: 60px;
}

.progress {
  margin-top: 30px;
}

.qr-and-info-list {
  margin-top: 50px;
  display: flex;
}

.qr {
  width: 216px;
  cursor: none;
}

.info-list {
  font-size: 24px;
  line-height: 40px;
  margin-left: 20px;
}

.info-qr-list {
  transform: translateY(-8px);
}

.info-stopcode-list {
  margin-top: 12px;
}
</style>