import React, { useState, useEffect } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import {
  // Alert,
  Button,
  Card,
  Modal,
  PageHeader,
} from "../../common/components";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const NewsList = () => {
  const { isLogged } = useAuth();
  const [news, setNews] = useState([]);
  let [selectedNews, setSelectedNews] = useState([]);
  const [submitState, setSubmitState] = useState({
    result: false,
    message: "",
  });

  const { user } = useUser();
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

    setSelectedNews(() => []);
    setSubmitState((prev) => ({
      ...prev,
      result: response.result,
      message: response.message,
    }));

    setShowMessage(true);
  };

  const fetchNews = async () => {
    try {
      const response = await HTTPClient.get("/news/");
      const retrived_news = response?.data ?? [];
      setNews(() => retrived_news);
    } catch (error) {
      console.error(error);
    }
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <Alert
          message={showMessage && submitState.message}
          type={showMessage && submitState.result}
        /> */}
        <Card onSelectedNews={onSelectedNews} news={news} isLogged={isLogged} />
      </div>
    </>
  );
};
export { NewsList };
