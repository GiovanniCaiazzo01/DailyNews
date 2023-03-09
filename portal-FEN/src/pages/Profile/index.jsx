import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "../../common/components";

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="profile-content">
          <h4>Name</h4>
          <Input
            label="Giovanni"
            type="text"
            name="name"
            onUserInput={onUserInput}
          />

          <h4>Surname</h4>
          <Input
            label="Caiazzo"
            type="text"
            name="surname"
            onUserInput={onUserInput}
          />

          <h4>Email</h4>
          <Input
            label="example@example.com"
            type="email"
            name="email"
            onUserInput={onUserInput}
          />

          <h4>Age</h4>
          <Input
            label="18"
            type="number"
            name="age"
            onUserInput={onUserInput}
          />

          <div className="profile-footer">
            <Button label="Update" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export { Profile };
