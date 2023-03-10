import React, { useState } from "react";
import { Form } from "../../common/components/Form";
import "./style.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    age: localStorage.getItem("age"),
  });

  const onUserInput = (name, value) => {
    console.log(value);
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
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
