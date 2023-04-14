import React, { useState, useEffect } from "react";
import { Card, PageHeader } from "../../common/components";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { HTTPClient } from "../../api/HTTPClients";

const SavedNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const onDelete = async (news) => {
    setLoading(() => true);
    verify_auth();
    const { ucode } = user;
    const title = news.title;

    const delete_news = await HTTPClient.delete(
      "/user/saved-news/delete/",
      ucode,
      { title }
    );
    handleAlert(delete_news.result, delete_news.message);
    setLoading(() => false);
  };

  useEffect(() => {
    fetchSavedNews();
  }, [loading]);

  return (
    <>
      <PageHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Card onDelete={onDelete} news={news} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};

export { SavedNews };
