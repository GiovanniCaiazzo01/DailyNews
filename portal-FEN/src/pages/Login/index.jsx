import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "../../common/components";
import { HTTPClient } from "../../api/HTTPClients";
const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const onUserInput = (name, value) => {
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onUserLogin = async () => {
    const user = await HTTPClient.post("/user/login", userCredentials);
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-header">Login</div>
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
            <Button
              label={"Login"}
              onClick={(e) => (e ? onUserLogin() : null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login };
