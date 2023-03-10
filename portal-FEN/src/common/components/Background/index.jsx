import Reac, { useState } from "react";
import "./style.css";
const BackGround = ({ about, children }) => {
  const [bg, setBg] = useState(
    `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/1920/1080`
  );
  return (
    <section
      className="background"
      about={about}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </section>
  );
};

export { BackGround };
