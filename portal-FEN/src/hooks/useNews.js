import { useState, useEffect, useCallback } from "react";
import { HTTPClient } from "../api/HTTPClients";

const fetchNews = async (nextPage, language) => {
  const response = await HTTPClient.post("/news/", { nextPage, language });
  const retrievedNews = response.data.news ?? [];
  const nextPageId = response.data.nextPage ?? "";

  return { retrievedNews, nextPageId };
};

const useNews = (page, user, isLogged) => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  const memorizedFetchNew = useCallback(async () => {
    setLoading(() => true);
    const language = isLogged ? user.language : "";
    const { retrievedNews, nextPageId } = await fetchNews(nextPage, language);
    setNews((prevNews) => [...prevNews, ...retrievedNews]);
    setNextPage(() => nextPageId);
    setLoading(() => false);
  }, [page]);

  useEffect(() => {
    memorizedFetchNew();
    return () => (isLogged ? setNews([]) : setNews([]));
  }, [memorizedFetchNew]);

  return { news, loading };
};

export default useNews;
