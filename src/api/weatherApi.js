import axios from "axios";

export const weatherApi = axios.create({
  baseURL: 'https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json'
})
