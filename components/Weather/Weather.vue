<template>
  <div class="weather text-center">
    <div class="weather__container">
      <div class="weather__wrapper rounded" @mouseenter="darkBg(true)" @mouseleave="darkBg(false)">
        <div class="weather__icon">
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt />
        </div>
        <div class="weather__main">{{ weather.name }}, {{ Math.floor(weather.main.temp) }} &#176;C</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      bodyDark: false
    };
  },
  props: {
    weather: {
      type: Object,
      required: false
    }
  },
  computed: {
    weatherHeight() {
      const weatherWrapper = document.querySelector(".weather__wrapper");
      return weatherWrapper.offsetHeight
    }
  },
  methods: {
    darkBg(bodyDark) {
      this.$store.state.city = 'Wrocław';
      const body = document.querySelector("body");
      const weatherWrapper = document.querySelector(".weather__wrapper");
      weatherWrapper.style.height = this.weatherHeight + "px";
      if (bodyDark) {
        body.classList.add("dark");
        event.target.classList.add("weather--more");
        const div = document.createElement("div");
        div.className = "weather__details";
        weatherWrapper.appendChild(div);
        div.innerHTML = `
          <div class="weather__detail">${this.weather.weather[0].description}</div>
          <div class="weather__detail">Wschód słońca: ${moment(this.weather.sys.sunrise*1000).format('HH:mm:ss')}</div>
          <div class="weather__detail">Zachód słońca: ${moment(this.weather.sys.sunset*1000).format('HH:mm:ss')}</div>
        `;
        weatherWrapper.style.height =
          this.weatherHeight + div.clientHeight + "px";
      } else {
        body.classList.remove("dark");
        event.target.classList.remove("weather--more");
        const weatherDetails = document.querySelector(".weather__details");
        weatherWrapper.style.height = this.weatherHeight + "px";
        weatherDetails.remove();
      }
    }
  }
};
</script>

<style scoped>
.weather {
  position: relative;
  height: 100px;
}
.weather__container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.weather__wrapper {
  overflow: hidden;
  background-color: #fff;
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px;
}
</style>

<style>
.weather__details {
  transition: 0.3s;
}
</style>