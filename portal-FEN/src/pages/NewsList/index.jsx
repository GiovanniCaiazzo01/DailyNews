import React, { useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { Button, Card, Modal, PageHeader } from "../../common/components";

const NewsList = () => {
  let [selectedNews, setSelectedNews] = useState([]);
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
    const response = await HTTPClient.post(
      "/user/saved-news/save",
      selectedNews
    );
    console.log(response);
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
        <Card onSelectedNews={onSelectedNews} />
      </div>
    </>
  );
};
export { NewsList };
