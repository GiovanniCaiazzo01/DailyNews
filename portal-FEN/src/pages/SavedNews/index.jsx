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
import { ToastContainer, toast } from "react-toastify";
import { HTTPClient } from "../../api/HTTPClients";

const SavedNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  let [selectedNews, setSelectedNews] = useState([]);
  const { user } = useUser();
  const { isLogged, verify_auth } = useAuth();

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

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
    const delete_news = await HTTPClient.delete(
      "/user/saved-news/delete/",
      ucode,
      { titles }
    );

    handleAlert(delete_news.result, delete_news.message);
    setSelectedNews(() => []);
  };

  useEffect(() => {
    fetchSavedNews();
  }, [selectedNews]);

  verify_auth();
  return (
    <>
      <PageHeader />
      {selectedNews?.length ? (
        <>
          <Modal label={`You have selected ${selectedNews.length} News`} />
          <div style={{ marginLeft: "40px" }}>
            <Button
              label={"Delete"}
              type="submit"
              onClick={() => onDeleteNews()}
            />
          </div>
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
        <Card onSelectedNews={onSelectedNews} news={news} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};

export { SavedNews };
