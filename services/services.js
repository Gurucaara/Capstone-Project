import { API_KEY, endpoint, country } from "../config/config";
// import axios from 'axios';

export async function services(category = "general") {
  let articles = await fetch(
    `${endpoint}?country=${country}&category=${category}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
        // 'Content-Type': 'application/json',
        // authorization: 'Access-Control-Allow-Origin: *'
      },
      // mode: 'no-cors'
    }
  );

  let result = await articles.json();
  articles = null;

  return result.articles;
}
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6939209d994449da9e9960174d61bf29

// https://newsapi.org/v2/top-headlines?country=us&apiKey=6939209d994449da9e9960174d61bf29
