import React, { useState } from "react";
import { Card, Loader, PageHeader } from "../../common/components";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { HTTPClient } from "../../api/HTTPClients";
import useUserNews from "../../hooks/useUserNews";

const SavedNews = () => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(0);
  const { user } = useUser();
  const { isLogged, verify_auth } = useAuth();
  const savedNews = useUserNews(user, deleted);

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
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
    setDeleted((prev) => prev + 1);
    setLoading(() => false);
  };

  return (
    <>
      <Loader loading={loading} />
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
        <Card onDelete={onDelete} news={savedNews} isLogged={isLogged} />
        <ToastContainer />
      </div>
    </>
  );
};

export { SavedNews };
