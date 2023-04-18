import React, { useState } from "react";
import { Form } from "../Form";

const UserInfoForm = ({ onSave, userInfo }) => {
  const [user, setUser] = useState({
    name: userInfo.user?.name,
    surname: userInfo.user?.surname,
    email: userInfo.user?.email,
    age: userInfo.user?.age,
  });

  const onUserInput = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    onSave(event, user);
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

  return (
    <>
      <Form
        header="Your Profile Info"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Salva"
        btnType="submit"
      />
    </>
  );
};

export { UserInfoForm };
