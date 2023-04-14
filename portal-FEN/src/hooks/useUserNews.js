import { useState, useEffect } from "react";
import { HTTPClient } from "../api/HTTPClients";

const useUserNews = (user, deleted) => {
  const [savedNews, setSavedNews] = useState();

  const fetchSavedNews = async () => {
    if (!user?.ucode) return [];
    const response = await HTTPClient.get(`/user/saved-news`, user.ucode);
    const saved_news = response.data.news;
    setSavedNews(() => saved_news);
  };

  useEffect(() => {
    fetchSavedNews();
  }, [deleted]);

  return savedNews;
};

export default useUserNews;
