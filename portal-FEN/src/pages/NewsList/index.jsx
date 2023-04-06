import React, { useState, useEffect, useRef } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";

import { Card, Loader, PageHeader } from "../../common/components";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const { isLogged, verify_auth } = useAuth();
  const { user } = useUser();
  const nextPageRef = useRef(nextPage);

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

  const fetchNews = async (page) => {
    setLoading(true);

    const response = await HTTPClient.post("/news/", {
      nextPage: page,
      language: isLogged ? user?.language : "",
    });

    const retrieved_news = response?.data.news ?? [];

    if (!areNewsEqual(news, retrieved_news)) {
      setNews((prevNews) => [...prevNews, ...retrieved_news]);
      setNextPage(response.data.nextPage);
      nextPageRef.current = response.data.nextPage;
    }

    setLoading(false);
  };

  const areNewsEqual = (newsA, newsB) => {
    if (newsA.length !== newsB.length) {
      return false;
    }

    for (let i = 0; i < newsA.length; i++) {
      if (JSON.stringify(newsA[i]) !== JSON.stringify(newsB[i])) {
        return false;
      }
    }

    return true;
  };

  const onSave = async (news) => {
    verify_auth();
    setLoading(() => true);
    news.ucode = user.ucode;
    const save_news = await HTTPClient.post("/user/saved-news/save", { news });
    handleAlert(save_news.result, save_news.message);
    setLoading(() => false);
  };
  useEffect(() => {
    fetchNews();

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (nextPageRef.current !== "") {
          fetchNews(nextPageRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <PageHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card news={news} onSave={onSave} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};

export { NewsList };
