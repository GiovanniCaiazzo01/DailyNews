import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HTTPClient } from "../../api/HTTPClients";
import { Alert, PageHeader } from "../../common/components";
import { Form } from "../../common/components/Form";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import "./style.css";

const Profile = () => {
  const userInfo = useUser();
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: userInfo.user?.name,
    surname: userInfo.user?.surname,
    email: userInfo.user?.email,
    age: userInfo.user?.age,
    language: userInfo.user?.language,
  });

  const [submitState, setSubmitState] = useState({
    result: false,
    message: "",
  });

  const onUserInput = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const updateUser = await HTTPClient.put("/users/update", user);
    verify_auth();
    setSubmitState((prev) => ({
      ...prev,
      result: updateUser.result,
      message: updateUser.message,
    }));
    userInfo.fetch_user();
  };

  const field = [
    {
      upperLabel: "Name",
      label: "Your Name",
      type: "text",
      name: "name",
      value: user.name,
    },
    {
      upperLabel: "Surname",
      label: "Your Surname",
      type: "text",
      name: "surname",
      value: user.surname,
    },
    {
      upperLabel: "Age",
      label: "Your Age",
      type: "number",
      name: "age",
      value: user.age,
    },
    {
      upperLabel: "E-mail",
      label: "example@example.com",
      type: "email",
      name: "email",
      value: user.email,
    },
  ];

  const languages = [
    { value: "ar", label: "Arabic" },
    { value: "de", label: "German" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "he", label: "Hebrew" },
    { value: "it", label: "Italian" },
    { value: "nl", label: "Dutch" },
    { value: "no", label: "Norwegian" },
    { value: "pt", label: "Portuguese" },
    { value: "ru", label: "Russian" },
    { value: "se", label: "Swedish" },
    { value: "zh", label: "Chinese" },
  ];

  useEffect(() => {
    !isLogged && navigate("/login");
  }, [isLogged]);

  return (
    <div>
      <PageHeader />
      <Form
        header="Your Profile Info"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Salva"
        btnType="submit"
        haveSelect
        selectData={languages}
        defaultSelectValue={user.language || "es: Italian"}
        upperSelect="Chose your news language"
      />
      {/* {submitState.result === true && <Alert message={submitState.message} />}
      {submitState.result === false && <Alert message={submitState.message} />} */}
    </div>
  );
};

export { Profile };
