import React, { useState } from "react";

import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";
import { Card, Loader, PageHeader } from "../../common/components";

import useAuth from "../../hooks/useAuth";
import useNews from "../../hooks/useNews";
import useUser from "../../hooks/useUser";
const NewsList = () => {
  const { isLogged, verify_auth } = useAuth();
  const { news, loading } = useNews();
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

  const onSave = async (news) => {
    verify_auth();
    news.ucode = user.ucode;
    const save_news = await HTTPClient.post("/user/saved-news/save", { news });
    handleAlert(save_news.result, save_news.message);
  };

  return (
    <>
      <Loader loading={loading} />
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
