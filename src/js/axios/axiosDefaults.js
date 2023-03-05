import axios from 'axios';

export const KEYS = {
  WEATHER: 'f3ada08f24524eaebe0dab7657f9578c',
  NEWS: 'zqSBDCWWfsUqmPN3a0NlmObTljUQwqkT',
  NEWS_2: 'I88PRBGPysQPobg19OG21QsF1dTuRU9q',
};

function randomKey() {
  const random = Math.random() * 10;

  return random.toFixed(1) > 5 ? KEYS.NEWS : KEYS.NEWS_2;
}

const axiosWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: KEYS.WEATHER,
    units: 'metric',
  },
});

const axiosNews = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key': randomKey(),
  },
});

export { axiosWeather, axiosNews };
