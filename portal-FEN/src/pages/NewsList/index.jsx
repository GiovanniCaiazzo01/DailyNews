import React, { useState, useEffect } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Card,
  Loader,
  Modal,
  PageHeader,
} from "../../common/components";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  let [selectedNews, setSelectedNews] = useState([]);

  const { isLogged, verify_auth } = useAuth();
  const { user } = useUser();

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

  const onSelectedNews = (checked, item) => {
    if (!checked) {
      setSelectedNews((selectedNews) =>
        selectedNews.filter((element) => element.id !== item.title)
      );
    } else {
      const to_insert = {
        checked: checked,
        id: item.title,
        news: item,
      };
      setSelectedNews((current) => [...current, to_insert]);
    }
  };

  const onSaveNews = async () => {
    verify_auth();
    const news_to_send = [];
    let tmp = {};
    selectedNews.forEach((news) => {
      news.news.ucode = user.ucode;
      delete news.checked;
      delete news.id;
      tmp = news.news;
      news_to_send.push(tmp);
      tmp = {};
    });

    const response = await HTTPClient.post(
      "/user/saved-news/save",
      news_to_send
    );

    handleAlert(response.result, response.message);

    setSelectedNews(() => []);
  };

  const fetchNews = async () => {
    setLoading(() => true);
    const response =
      isLogged && user?.language
        ? await HTTPClient.get("/news/", user.language)
        : await HTTPClient.get("/news/");
    const retrived_news = response?.data ?? [];
    setNews(() => retrived_news);
    setLoading(() => false);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <PageHeader />
      {selectedNews.length ? (
        <>
          <Modal
            label={`You have selected ${selectedNews.length} element, Click the button to save it`}
          />
          <Button label={"Save"} type="submit" onClick={() => onSaveNews()} />
        </>
      ) : (
        ""
      )}
      {loading && <Loader />}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <Card onSelectedNews={onSelectedNews} news={news} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};
export { NewsList };
