'use client';

import { useEffect, useState } from "react";
import { getNewsFromApi } from "@/services/NewsList.service";
import { newsDTO } from "@/types/news.type";

export function UseIndexContainer() {

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  const [newsList, setNewsList] = useState<newsDTO[]>([]);

  const getNews = async () => {
    try {
      const news = await getNewsFromApi();
      setNewsList(news);
    } catch (error) {
      console.error(error);
    }
  };

  return { newsList };

}
