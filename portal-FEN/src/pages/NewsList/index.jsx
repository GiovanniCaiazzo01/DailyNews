import React, { useState, useEffect, useRef } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";

import { Card, Loader, PageHeader } from "../../common/components";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const onSave = async (news) => {
    verify_auth();
    setLoading(true);
    news.ucode = user.ucode;
    const save_news = await HTTPClient.post("/user/saved-news/save", { news });
    handleAlert(save_news.result, save_news.message);
    setLoading(false);
  };

  const fetchNews = async () => {
    setLoading(true);

    const response = await HTTPClient.post("/news/", {
      nextPage: nextPageRef.current,
      language: isLogged ? user?.language : "",
    });
    const retrived_news = response?.data.news ?? [];
    setNews((prevNews) => [...prevNews, ...retrived_news]);
    setNextPage(response.data.nextPage);
    nextPageRef.current = response.data.nextPage;
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchNews();
    }
  };

  useEffect(() => {
    fetchNews();

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
        <Card onSave={onSave} news={news} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};
export { NewsList };
