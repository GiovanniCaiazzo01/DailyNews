import React, { useState, useEffect } from "react";
import { HTTPClient } from "../../../api/HTTPClients";

import "./style.css";

const Card = () => {
  const [news, setnews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await HTTPClient.get("/news/");
      const retrived_news = response?.data;
      setnews(() => retrived_news);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
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
                    : "https://picsum.photos/seed/picsum/1920/1080"
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
