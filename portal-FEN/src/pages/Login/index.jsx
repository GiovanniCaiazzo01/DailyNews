import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "../../common/components";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";

const Login = ({ bg }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onUserInput = (name, value) => {
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onUserLogin = async (e) => {
    e.preventDefault();
    const user = await HTTPClient.post("/users/login", {
      ...userCredentials,
    });
    localStorage.setItem("token", user.data.token);
    localStorage.setItem("name", user.data.name);
    if (user.result) navigate("/");
  };

  return (
    <section className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-container">
        <div className="login-header">Login</div>
        <form onSubmit={onUserLogin}>
          <div className="login-inputs-container">
            <div className="login-input-suffix">E-mail</div>
            <Input
              label="Your email"
              type="email"
              name="email"
              onUserInput={onUserInput}
            />
            <div className="login-input-suffix">Password</div>
            <Input
              label="Your password"
              type="password"
              name="password"
              onUserInput={onUserInput}
            />
            <div className="login-footer">
              <Button label="Login" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export { Login };
