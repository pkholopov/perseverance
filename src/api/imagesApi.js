import axios from "axios";

export const imagesApi = axios.create({
  // baseURL: 'https://mars.nasa.gov/rss/api/?feed=raw_images&category=mars2020,ingenuity&feedtype=json&ver=1.2&num=100&page=0&&order=sol+desc&&&',
  baseURL: 'https://mars.nasa.gov/rss/api/',
  method: 'GET',
  params: {
    
    feed: "raw_images",
    category: "mars2020",
    feedtype: "json",
    ver: "1.2",
    // num: "100",
    // order: "sol+desc",
    // page: "0"
  }
})
