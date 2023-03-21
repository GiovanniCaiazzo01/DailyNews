import React, { useState, useEffect } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";
import { Form } from "../../common/components/Form";
import { Alert, BackGround } from "../../common/components";
import { ToastContainer, toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

  const setLocalStorage = async (userInfo) => {
    localStorage.setItem("token", userInfo.data.token);
  };

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

    handleAlert(user.result, user.message);

    await setLocalStorage(user);
    if (user.result === true) {
      return navigate("/");
    }
    // if (user.result === true) navigate("/");
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

  useEffect(() => {
    isLogged === true && navigate("/");
  }, []);
  return (
    <BackGround about="Background for a login page">
      <Form
        header="Login"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Login"
        btnType="submit"
        haveSecondBtn
        secondBtnLabel="Register"
        onClick={(e) => e.target.name === "register" && navigate("/register")}
      />
      <ToastContainer />
    </BackGround>
  );
};

export { Login };
