import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const Card = ({ onDelete, onSave, news, isLogged }) => {
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
        ? news.map((item) => {
            return (
              <div id="card-container">
                <div id="card-header">
                  <div id="card-header-text">
                    <h3>{truncateWords(item.title, 10)}</h3>
                  </div>
                  <div id="card-info">
                    <div>{item.pubication_date}</div>
                    <div>{item.creator ? item.creator : ""}</div>
                  </div>
                </div>
                <Link to={item.link} target="_blank" key={item.title}>
                  <div id="card-image">
                    <img src={item.image_url} loading="lazy" />
                  </div>
                </Link>
                {isLogged && pathname === "/" && (
                  <div id="card-footer">
                    <div id="icon-container">
                      <i
                        id="save"
                        class="bx bx-save"
                        onClick={() => onSave(item)}
                      ></i>
                    </div>
                  </div>
                )}

                {isLogged && pathname === "/saved" && (
                  <div id="card-footer">
                    <div id="icon-container">
                      <i
                        id="delete"
                        class="bx bx-trash"
                        onClick={() => onDelete(item)}
                      ></i>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : ""}
    </>
  );
};

export { Card };
