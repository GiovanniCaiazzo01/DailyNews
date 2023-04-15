import { useState, useEffect } from "react";
import { HTTPClient } from "../api/HTTPClients";

const useUserNews = (user, deleted) => {
  const [savedNews, setSavedNews] = useState();
  const [loading, setLoading] = useState(false);

  const fetchSavedNews = async () => {
    setLoading(() => true);
    if (!user?.ucode) return [];
    const response = await HTTPClient.get(`/user/saved-news`, user.ucode);
    const saved_news = response.data.news;
    setSavedNews(() => saved_news);
    setLoading(() => false);
  };

  useEffect(() => {
    fetchSavedNews();
  }, [deleted]);

  return { savedNews, loading };
};

export default useUserNews;
