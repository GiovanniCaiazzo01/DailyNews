import React, { useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import { Alert } from "../../common/components";
import { Form } from "../../common/components/Form";
import "./style.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    age: localStorage.getItem("age"),
  });

  const [submitState, setSubmitState] = useState({
    result: Boolean,
    message: "",
  });

  const onUserInput = (name, value) => {
    console.log(value);
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // TODO: SOTTO QUESTO CONTROLLO DOBBIAMO FAR RITORNARE UN MESSAGGIO DI ERROR
    // if (
    //   user.name === localStorage.getItem("name") &&
    //   user.surname === localStorage.getItem("surname") &&
    //   user.email === localStorage.getItem("email") &&
    //   user.age === localStorage.getItem("age")
    // ) {
    //   return console.log("Messaggio di errore");
    // }
    const updateUser = await HTTPClient.put("/users/update", user);

    if (!updateUser.result) {
      setSubmitState((prev) => ({ ...prev, ["result"]: updateUser.result }));
      setSubmitState((prev) => ({ ...prev, ["message"]: updateUser.message }));
    }
    const { name, surname, email, age } = user;
    if (updateUser) {
      localStorage.setItem("name", name);
      localStorage.setItem("surname", surname);
      localStorage.setItem("email", email);
      localStorage.setItem("age", age);
    }
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
    <div>
      <Form
        header="Your Profile Info"
        field={field}
        onSubmit={onSubmit}
        onUserInput={onUserInput}
        btnLabel="Salva"
        btnType="submit"
      />
      {submitState.result === false && <Alert message={submitState.message} />}
    </div>
  );
};

export { Profile };
