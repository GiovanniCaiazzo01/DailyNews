import React, { useState } from "react";
import { Form } from "../../common/components/Form";
import { BackGround } from "../../common/components";
import { HTTPClient } from "../../api/HTTPClients";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    password: "",
    "Repeat Password": "",
  });

  const { isLogged } = useAuth();
  const navigate = useNavigate();

  isLogged === true && navigate("/");

  const handleAlert = (result, message) => {
    return result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

  const onUserInput = (name, value) => {
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    setLoading(() => true);
    e.preventDefault();
    const user = await HTTPClient.post("/users/register", {
      ...userCredentials,
    });

    handleAlert(user.result, user.message);
    if (user.result) {
      return navigate("/login");
    }
    setLoading(() => false);
  };

  const field = [
    {
      upperLabel: "Name",
      label: "Your Name",
      type: "text",
      name: "name",
    },
    {
      upperLabel: "Surname",
      label: "Your Surname",
      type: "text",
      name: "surname",
    },
    {
      upperLabel: "Age",
      label: "Your Age",
      type: "number",
      name: "age",
    },
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
    {
      upperLabel: "Confirm Password",
      label: "Repeat Password",
      type: "password",
      name: "Repeat Password",
    },
  ];
  return (
    <BackGround about="Background for a register page">
      <Form
        header="Register"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Register"
        btnType="submit"
        haveSecondBtn
        secondBtnLabel="Login"
        onClick={(e) => e.target.name === "login" && navigate("/login")}
        loading={loading}
      />
      <ToastContainer />
    </BackGround>
  );
};
export { Register };
