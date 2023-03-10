import React, { useState } from "react";
import { Form } from "../../common/components/Form";
import "./style.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("name") || "",
    surname: localStorage.getItem("surname") || "",
    email: localStorage.getItem("email") || "",
    age: localStorage.getItem("age") || "",
  });

  const onUserInput = (name, value) => {
    console.log(value);
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  console.log(user);
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
    <div>
      <Form
        header="Your Profile Info"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Salva"
        btnType="submit"
      />
    </div>
  );
};

export { Profile };
