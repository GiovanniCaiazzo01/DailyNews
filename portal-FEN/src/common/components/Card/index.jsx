import React, { useState, useEffect } from "react";
import { HTTPClient } from "../../../api/HTTPClients";
import "./style.css";

const Card = ({ saved }) => {
  const [news, setNews] = useState([
    {
      title: "bla bla bla",
      author: "Filippo",
      description: "jsalkdjsalkdjsalkjdsalkjdaslkjdalkdjalksjdalkj",
      image: "",
    },
  ]);

  const fetchNews = async () => {
    try {
      const response = await HTTPClient.get("/news/");
      const retrived_news = response?.data;
      setNews(() => retrived_news);
    } catch (error) {
      console.error(error);
    }
  };

  const userSavedNews = async () => {
    try {
      const response = await HTTPClient.get(`/user/saved-news/${"ucode"}`);
      const saved_news = response.data;
      setNews(() => saved_news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saved ? fetchNews() : userSavedNews();
  }, []);

  const truncateWords = (string, limit) => {
    const words = string.split(" ");
    return (
      words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
    );
  };

  return (
    <>
      {news
        ? news.map((item) => (
            <div
              key={item.title}
              className="blog"
              style={{
                backgroundImage: `url(${
                  item.image
                    ? item.image
                    : "https://w.wallhaven.cc/full/qz/wallhaven-qzdqvr.jpg"
                })`,
              }}
            >
              <div className="title-box">
                <h3>{truncateWords(item.title, 6)}</h3>
                <hr />
                <div className="intro">
                  {item.author ? truncateWords(item.author, 10) : ""}
                </div>
              </div>
              <div className="info">
                <span>{truncateWords(item.description, 20)}</span>
              </div>
              <div className="footer">
                <div className="icon-holder">
                  <span>
                    <i className="fa fa-comment-o"></i>
                    <span>12</span>
                    <i className="fa fa-calendar"></i>
                    <span>03.12.2015</span>
                  </span>
                </div>
              </div>

              <div className="color-overlay"></div>
            </div>
          ))
        : ""}
    </>
  );
};

export { Card };
