import Vuex from "vuex";
import axios from "axios";

const weatherApiKey = '707e320c77a772292db63822b038b43a'
const newsApiKey = '578c0bfbcf1e451ca22aa6b6e71942fc'

const createStore = () => {
  return new Vuex.Store({
    state: {
      weather: {},
      city: 'Poznan',
      news: {}
    },
    mutations: {
      setWeather(state, weather) {
        state.weather = weather;
      },
      setNews(state, news) {
        state.news = news;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},pl&units=metric&appid=${weatherApiKey}&lang=pl`);
        const resData = await response.json();
        vuexContext.commit('setWeather', resData);

        const news = await axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`);
        vuexContext.commit('setNews', news.data);
      }

    },
    getters: {
      getWeather(state) {
        return state.weather;
      },
      getNews(state) {
        return state.news;
      }
    }
  });
};

export default createStore;
