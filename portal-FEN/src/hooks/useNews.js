import { useState, useEffect, useCallback } from "react";
import { HTTPClient } from "../api/HTTPClients";
import useUser from "./useUser";
import useAuth from "./useAuth";

const fetchNews = async (language) => {
  const response = await HTTPClient.post("/news/", {
    language,
  });
  const retrievedNews = response?.data.news ?? [];
  const nextPageId = response.data.nextPage ?? "";
  return { retrievedNews, nextPageId };
};

const useNews = () => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const { isLogged } = useAuth();

  const memorizedFetchNews = useCallback(async () => {
    setLoading(() => true);
    const language = isLogged ? user.language : "";
    const { retrievedNews, nextPageId } = await fetchNews(language);
    setNews((prevNews) => [...prevNews, ...retrievedNews]);
    !nextPage && setNextPage(() => nextPageId);
    setLoading(() => false);
  }, [isLogged, user?.language]);

  useEffect(() => {
    memorizedFetchNews();

    console.count(news);
  }, [memorizedFetchNews]);
  return { news, loading };
};

export default useNews;
