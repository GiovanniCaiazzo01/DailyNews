import React, { useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";
import { Form } from "../../common/components/Form";
import { Alert, BackGround } from "../../common/components";
import useAuth from "../../hooks/useAuth";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged } = useAuth();
  isLogged && navigate("/");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [submitState, setSubmitState] = useState({
    result: Boolean,
    message: "",
  });

  const setLocalStorage = async (userInfo) => {
    // data: age: "2";
    // email: "d@gmail.com";
    // name: "d";
    // token: "eyJhbGc";

    for (const item in userInfo.data) {
      localStorage.setItem(item, userInfo.data[item]);
    }
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

    if (!user.result) {
      setSubmitState((prev) => ({ ...prev, ["result"]: user.result }));
      setSubmitState((prev) => ({ ...prev, ["message"]: user.message }));
    }
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

  return (
    <BackGround about="Background for a login page">
      {submitState.result === false && <Alert message={submitState.message} />}
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
