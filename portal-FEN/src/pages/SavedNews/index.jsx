import React, { useState, useEffect } from "react";
import {
  // Alert,
  Button,
  Card,
  Modal,
  PageHeader,
} from "../../common/components";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { HTTPClient } from "../../api/HTTPClients";

const SavedNews = () => {
  const user = useUser();
  const { isLogged } = useAuth();
  const [news, setNews] = useState([]);
  let [selectedNews, setSelectedNews] = useState([]);
  // const [showMessage, setShowMessage] = useState(false);
  const [submitState, setSubmitState] = useState({
    result: false,
    message: "",
  });

  const fetchSavedNews = async () => {
    try {
      if (!user?.ucode) return;
      const response = await HTTPClient.get(`/user/saved-news`, user.ucode);
      const saved_news = response.data.news;
      setNews(() => saved_news);
    } catch (error) {
      console.log(error);
    }
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

  const onDeleteNews = async () => {
    const { ucode } = user;

    const titles = [];
    selectedNews.forEach((news) => {
      const title = news.news.title;
      titles.push(title);
    });
    const response = await HTTPClient.delete(
      "/user/saved-news/delete/",
      ucode,
      { titles }
    );
    setSelectedNews(() => []);
    setShowMessage(() => true);

    setSubmitState((prev) => ({
      ...prev,
      result: response.result,
      message: response.message,
    }));

    setTimeout(() => {
      setShowMessage(() => false);
    }, 4000);
  };

  useEffect(() => {
    fetchSavedNews();
  }, [submitState]);
  return (
    <>
      <PageHeader />
      {selectedNews?.length ? (
        <>
          <Modal
            label={`You have selected ${selectedNews.length} element, click the button to delete this news!`}
          />
          <Button label={"Save"} type="submit" onClick={() => onDeleteNews()} />
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
        {/* <Alert message={submitState.message} show={showMessage} /> */}
        <Card onSelectedNews={onSelectedNews} news={news} isLogged={isLogged} />
      </div>
    </>
  );
};

export { SavedNews };
