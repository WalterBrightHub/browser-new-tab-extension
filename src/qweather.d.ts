
const cityRes={
  "code": "200",
  "location": [
    {
      "name": "北京",
      "id": "101010100",
      "lat": "39.90498",
      "lon": "116.40528",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "10",
      "fxLink": "http://hfx.link/2ax1"
    },
    {
      "name": "海淀",
      "id": "101010200",
      "lat": "39.95607",
      "lon": "116.31031",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "15",
      "fxLink": "http://hfx.link/2ay1"
    },
    {
      "name": "朝阳",
      "id": "101010300",
      "lat": "39.92148",
      "lon": "116.48641",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "15",
      "fxLink": "http://hfx.link/2az1"
    },
    {
      "name": "昌平",
      "id": "101010700",
      "lat": "40.21808",
      "lon": "116.23590",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "23",
      "fxLink": "http://hfx.link/2b31"
    },
    {
      "name": "房山",
      "id": "101011200",
      "lat": "39.73553",
      "lon": "116.13916",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "23",
      "fxLink": "http://hfx.link/2b81"
    },
    {
      "name": "通州",
      "id": "101010600",
      "lat": "39.90248",
      "lon": "116.65859",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "23",
      "fxLink": "http://hfx.link/2b21"
    },
    {
      "name": "丰台",
      "id": "101010900",
      "lat": "39.86364",
      "lon": "116.28696",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "25",
      "fxLink": "http://hfx.link/2b51"
    },
    {
      "name": "大兴",
      "id": "101011100",
      "lat": "39.72890",
      "lon": "116.33803",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "25",
      "fxLink": "http://hfx.link/2b71"
    },
    {
      "name": "延庆",
      "id": "101010800",
      "lat": "40.46532",
      "lon": "115.98500",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "33",
      "fxLink": "http://hfx.link/2b41"
    },
    {
      "name": "平谷",
      "id": "101011500",
      "lat": "40.14478",
      "lon": "117.11233",
      "adm2": "北京",
      "adm1": "北京市",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "33",
      "fxLink": "http://hfx.link/2bb1"
    }
  ],
  "refer": {
    "sources": [
      "qweather.com"
    ],
    "license": [
      "commercial license"
    ]
  }
}

const weatherRes={
  "code": "200",
  "updateTime": "2020-06-30T22:00+08:00",
  "fxLink": "http://hfx.link/2ax1",
  "now": {
    "obsTime": "2020-06-30T21:40+08:00",
    "temp": "24",
    "feelsLike": "26",
    "icon": "101",
    "text": "多云",
    "wind360": "123",
    "windDir": "东南风",
    "windScale": "1",
    "windSpeed": "3",
    "humidity": "72",
    "precip": "0.0",
    "pressure": "1003",
    "vis": "16",
    "cloud": "10",
    "dew": "21"
  },
  "refer": {
    "sources": [
      "QWeather",
      "NMC",
      "ECMWF"
    ],
    "license": [
      "commercial license"
    ]
  }
}

type CityRes=typeof cityRes

type WeatherRes=typeof weatherRes