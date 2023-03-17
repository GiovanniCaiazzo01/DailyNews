import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const Card = ({ onSelectedNews, news, isLogged }) => {
  const { pathname } = useLocation();
  const truncateWords = (string, limit) => {
    const words = string ? string.split(" ") : "";
    return words
      ? words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
      : "";
  };

  return (
    <>
      {news
        ? news.map((item) => (
            <Link to={item.link} target="_blank" key={item.title}>
              <div
                key={item.title}
                className="post"
                style={{
                  backgroundImage: `url(${
                    item.image_url
                      ? item.image_url
                      : "https://w.wallhaven.cc/full/nr/wallhaven-nr7v5j.jpg"
                  })`,
                }}
              >
                <div className="title-box">
                  <h3>{truncateWords(item?.title, 6)}</h3>
                  <hr />
                  <div className="intro">
                    {item.creator
                      ? truncateWords(item?.creator[0], 10)
                      : truncateWords(item?.source_id, 10)}
                  </div>
                </div>
                <div className="info">
                  <span>{truncateWords(item.description, 20)}</span>
                </div>
                <div className="footer">
                  <div className="icon-holder">
                    <span>
                      <i className="fa fa-comment-o"></i>
                      {isLogged && pathname === "/" && (
                        <span>
                          Save{" "}
                          <input
                            type="checkbox"
                            id={item.title}
                            name={item.title}
                            onClick={(e) =>
                              onSelectedNews(e.target.checked, item)
                            }
                          />
                        </span>
                      )}
                      {isLogged && pathname === "/saved" && (
                        <span>
                          Delete{" "}
                          <input
                            type="checkbox"
                            id={item.title}
                            name={item.title}
                            onClick={(e) =>
                              onSelectedNews(e.target.checked, item)
                            }
                          />
                        </span>
                      )}
                      <span className="space"></span>
                      <i className="fa fa-calendar"></i>
                      <span>{item.pubication_date}</span>
                    </span>
                  </div>
                </div>
                <div className="color-overlay"></div>
              </div>
            </Link>
          ))
        : ""}
    </>
  );
};

export { Card };
