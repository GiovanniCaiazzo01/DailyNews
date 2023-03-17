import React, { useState, useEffect } from "react";
import { Alert, Card, PageHeader } from "../../common/components";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { HTTPClient } from "../../api/HTTPClients";

const SavedNews = () => {
  const user = useUser();
  const { isLogged } = useAuth();
  const [news, setNews] = useState([]);
  let [selectedNews, setSelectedNews] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
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

  const onSelectedNews = () => {};
  useEffect(() => {
    fetchSavedNews();
  }, []);
  return (
    <>
      <PageHeader />
      {selectedNews?.length ? (
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
        <Alert message={submitState.message} show={showMessage} />
        <Card onSelectedNews={onSelectedNews} news={news} isLogged={isLogged} />
      </div>
    </>
  );
};

export { SavedNews };
