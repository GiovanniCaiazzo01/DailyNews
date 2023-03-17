import React, { useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import {
  Alert,
  Button,
  Card,
  Modal,
  PageHeader,
} from "../../common/components";
import useUser from "../../hooks/useUser";

const NewsList = () => {
  let [selectedNews, setSelectedNews] = useState([]);
  const [showMessage, setShowMessage] = useState();
  const [submitState, setSubmitState] = useState({
    result: Boolean,
    message: "",
  });

  const user = useUser();
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

    if (response.result) {
      setShowMessage(() => true);
      setSubmitState((prev) => ({ ...prev, ["result"]: response.result }));
      setSubmitState((prev) => ({ ...prev, ["message"]: response.message }));
    }
  };

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
        {showMessage ? (
          <Alert message={submitState.message} />
        ) : (
          <Alert message={submitState.message} />
        )}
        <Card onSelectedNews={onSelectedNews} />
      </div>
    </>
  );
};
export { NewsList };
