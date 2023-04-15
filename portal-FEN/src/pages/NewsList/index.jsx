import React, { useState } from "react";

import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";
import { Card, Loader, PageHeader } from "../../common/components";

import useAuth from "../../hooks/useAuth";
import useNews from "../../hooks/useNews";

const NewsList = () => {
  const [loading, setLoading] = useState(true);
  const { verify_auth } = useAuth();
  const news = useNews();

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
    setLoading(() => true);
    news.ucode = user.ucode;
    const save_news = await HTTPClient.post("/user/saved-news/save", { news });
    handleAlert(save_news.result, save_news.message);
    setLoading(() => false);
  };

  return (
    <>
      <Loader loading={!news ? true : false} />
      <PageHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card news={news} onSave={onSave} isLogged />
        <ToastContainer />
      </div>
    </>
  );
};

export { NewsList };
