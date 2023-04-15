import { useState, useEffect, useRef, useCallback } from "react";
import { HTTPClient } from "../api/HTTPClients";
import useUser from "./useUser";
import useAuth from "./useAuth";

const fetchNews = async (page, language) => {
  const response = await HTTPClient.post("/news/", {
    nextPage: page,
    language,
  });
  const retrievedNews = response?.data.news ?? [];
  const nextPageId = response.data.nextPage;
  return { retrievedNews, nextPageId };
};

const useNews = () => {
  const [news, setNews] = useState([]);
  const [nextPageId, setNextPageId] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const nextPageRef = useRef(nextPageId);

  const { user } = useUser();
  const { isLogged } = useAuth();

  const memorizedFetchNews = useCallback(async () => {
    setLoading(() => true);
    const language = isLogged ? user.language : "";
    const { retrievedNews, nextPageId } = await fetchNews(
      nextPageRef.current,
      language
    );
    setNews((prevNews) => [...prevNews, ...retrievedNews]);
    setNextPageId(nextPageId);
    nextPageRef.current = nextPageId;
    setLoading(() => false);
  }, [isLogged, user?.language, page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    memorizedFetchNews();
  }, [memorizedFetchNews]);

  return { news, loading };
};

export default useNews;
