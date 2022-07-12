<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const key = import.meta.env.VITE_QWEATHER_KEY

const getCurrentPosition = (): Promise<GeolocationPosition> => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject)
})


const city = ref<CityRes | null>(null)

const weather = ref<WeatherRes | null>(null)

onMounted(async () => {
  const location = await getCurrentPosition()
  const { longitude, latitude } = location.coords
  const cityRequest = axios('https://geoapi.qweather.com/v2/city/lookup', {
    params: {
      key,
      location: longitude + ',' + latitude
    }
  }).then((res) => {
    city.value = res.data
  })
  const weatherRequest = axios('https://devapi.qweather.com/v7/weather/now', {
    params: {
      key,
      location: longitude + ',' + latitude
    }
  }).then(res => {
    weather.value = res.data
  })

})
</script>

<template>
  <div class="weather" :data-icon="weather?.now.icon">
    <div class="temp">{{ weather?.now.temp }}°</div>
    <div class="city-name-and-text">
      <div class="city-name">{{ city?.location[0].name }}</div>
      <div class="weather-text">{{ weather?.now.text }}</div>
    </div>
    <i :class="'qi-' + weather?.now.icon || 999" class="icon"></i>
  </div>
</template>

<style lang="scss" scoped>
.weather {
  width: 250px;
  height: 100px;
  border-radius: 5px;
  // background: radial-gradient(circle at 0 -977px,#5fcdfe 1057px,#009be1 1057px, 1157px);
  display: flex;
  color: #fff;
  padding-left: 25px;
  transition: all 0.5s;


}



// https://www.ui.cn/detail/307347.html

// 晴到少云
[data-icon="100"],
[data-icon="102"],
[data-icon="150"],
[data-icon="152"] {
  background: linear-gradient(165deg, #5fcdfe, #009be1);

}

// 多云到阴
[data-icon="101"],
[data-icon="103"],
[data-icon="104"],
[data-icon="151"],
[data-icon="153"],
[data-icon="154"] {

  background: linear-gradient(165deg, #58a1ee, #5393ea);
}

// 雨
[data-icon^="3"] {

  background: linear-gradient(165deg, #11d7bc, #09b7ad);
}

// 冰雹
[data-icon="304"] {

  background: linear-gradient(165deg, #caddfd, #7da2fa);
}

// 雪，冷
[data-icon^="4"],
[data-icon="901"] {

  background: linear-gradient(165deg, #9fd2fd, #4da5fe);
}


// 雾霾，未知
[data-icon^="5"],
[data-icon="999"] {

  background: linear-gradient(165deg, #9ea7b0, #626979);
}


// 月，雷
[data-icon^="8"],
[data-icon="302"],
[data-icon="303"],
[data-icon="304"] {

  background: linear-gradient(165deg, #5f81e2, #4f68bc);
}


// 热
[data-icon="900"] {

  background: linear-gradient(165deg, #feca67, #ffaf28);
}



.temp {
  font-size: 35px;
  margin-top: auto;
  margin-bottom: 30px;
  font-weight: bold;
}

.city-name-and-text {
  margin: auto 0 35px 1em;
  font-size: 12px;
}

.weather-text {
  // margin-top: 5px;
}

.icon {
  font-size: 65px;
  align-self: center;
  margin: 0 25px 0 auto;
}
</style>