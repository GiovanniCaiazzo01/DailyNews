import React, { useState } from "react";

import { HTTPClient } from "../../api/HTTPClients";
import { ToastContainer, toast } from "react-toastify";
import { Arrow, Card, Loader, PageHeader } from "../../common/components";

import useAuth from "../../hooks/useAuth";
import useNews from "../../hooks/useNews";
import useUser from "../../hooks/useUser";
const NewsList = () => {
  const [page, setPage] = useState(0);
  const { isLogged, verify_auth } = useAuth();
  const { user } = useUser();
  const { news, loading } = useNews(page, user, isLogged);

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

  const handleArrowClick = (value) => {
    setPage((prev) => prev + value);
  };

  return (
    <>
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
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Arrow direction="down" onClick={handleArrowClick} />
      )}
    </>
  );
};

export { NewsList };
