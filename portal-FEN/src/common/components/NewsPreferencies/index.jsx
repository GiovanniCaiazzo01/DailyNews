import React, { useState } from "react";
import { Form } from "../Form";
import { newsCategory, languages } from "./utils";

const NewsPreferencies = ({ onSave, userInfo }) => {
  const [user, setUser] = useState({
    language: userInfo.user?.language,
  });

  const onUserInput = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    onSave(event, user);
  };

  languages.defaultValue = user.language || "es: Italian";
  const selectData = [languages, newsCategory];

  return (
    <Form
      header="News Filter"
      haveSelect
      selectData={selectData}
      onUserInput={onUserInput}
      onSubmit={onSubmit}
      btnLabel={"Save"}
    />
  );
};

export { NewsPreferencies };
