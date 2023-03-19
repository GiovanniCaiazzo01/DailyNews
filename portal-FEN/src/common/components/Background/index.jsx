import React, { useState, useEffect } from "react";
import "./style.css";

const BackGround = ({ about, children }) => {
  const [bg, setBg] = useState();

  useEffect(() => {
    setBg(
      () =>
        `https://picsum.photos/id/${
          Math.floor(Math.random() * 100) + 1
        }/1920/1080`
    );
  }, []);

  return (
    <section className="background" about={about}>
      <img
        src={bg}
        alt="background"
        loading="lazy"
        className="background-img"
      />
      {children}
    </section>
  );
};

export { BackGround };
