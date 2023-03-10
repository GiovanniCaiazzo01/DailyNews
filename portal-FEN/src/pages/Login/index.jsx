import React, { useState } from "react";
import "./style.css";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Form } from "../../common/components/Form";
import { BackGround } from "../../common/components";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();
  isLogged && navigate("/");
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await HTTPClient.post("/auth/login", {
      ...userCredentials,
    });
    console.log(user);
    localStorage.setItem("token", user.data?.token);
    localStorage.setItem("name", user.data?.name);
    localStorage.setItem("email", user.data?.email);
    localStorage.setItem("age", user.data?.age);
    if (user.result) navigate("/");
  };

  const field = [
    {
      upperLabel: "E-mail",
      label: "example@example.com",
      type: "email",
      name: "email",
    },
    {
      upperLabel: "Password",
      label: "Your Password",
      type: "password",
      name: "password",
    },
  ];

  return (
    <BackGround about="Background for a login page">
      <Form
        header="Login"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Login"
        btnType="submit"
      />
    </BackGround>
  );
};

export { Login };
