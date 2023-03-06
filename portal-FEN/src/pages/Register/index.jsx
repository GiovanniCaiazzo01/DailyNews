import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "../../common/components";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    password: "",
    "Repeat Password": "",
  });

  const navigate = useNavigate();

  const onUserInput = (name, value) => {
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onUserRegister = async (e) => {
    e.preventDefault();
    const user = await HTTPClient.post("/users/register", {
      ...userCredentials,
    });

    if (user.result) {
      return navigate("/login");
    }
  };

  return (
    <section className="register">
      <div className="register-container">
        <div className="register-header">Register</div>
        <form onSubmit={onUserRegister}>
          <div className="register-inputs-container">
            <div className="register-input-suffix">Name</div>
            <Input
              label="Your Name"
              type="text"
              name="name"
              onUserInput={onUserInput}
            />
            <div className="register-input-suffix">Surname</div>
            <Input
              label="Your Surname"
              type="text"
              name="surname"
              onUserInput={onUserInput}
            />
            <div className="register-input-suffix">Age</div>
            <Input
              label="Your Age"
              type="number"
              name="age"
              onUserInput={onUserInput}
            />
            <div className="register-input-suffix">E-mail</div>
            <Input
              label="Your email"
              type="email"
              name="email"
              onUserInput={onUserInput}
            />
            <div className="register-input-suffix">Password</div>
            <Input
              label="Your Password"
              type="password"
              name="password"
              onUserInput={onUserInput}
            />
            <div className="register-input-suffix">Repeat Password</div>
            <Input
              label="Repeat Password"
              type="password"
              name="Repeat Password"
              onUserInput={onUserInput}
            />
            <div className="register-footer">
              <Button label={"Register"} type={"submit"} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export { Register };
