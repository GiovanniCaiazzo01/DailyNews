import { useState, useEffect, useCallback } from "react";
import { HTTPClient } from "../api/HTTPClients";
import useUser from "./useUser";
import useAuth from "./useAuth";
import { useLocation } from "react-router-dom";

const fetchNews = async (nextPage, language) => {
  const response = await HTTPClient.post("/news/", { nextPage, language });
  const retrievedNews = response.data.news ?? [];
  const nextPageId = response.data.nextPage ?? "";

  return { retrievedNews, nextPageId };
};

const useNews = (page) => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const { isLogged } = useAuth();

  const memorizedFetchNews = useCallback(async () => {
    setLoading(() => true);
    const language = isLogged ? user.language : "";
    const { retrievedNews, nextPageId } = await fetchNews(nextPage, language);
    setNews((prevNews) => [...prevNews, ...retrievedNews]);
    setNextPage(() => nextPageId);
    setLoading(() => false);
  }, [page, user?.language]);

  useEffect(() => {
    memorizedFetchNews();
  }, [memorizedFetchNews, location]);
  return { news, loading };
};

export default useNews;
