import React, { useState } from "react";
import { Form } from "../Form";

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

  return (
    <Form
      header="News Filter"
      haveSelect
      selectData={languages}
      onUserInput={onUserInput}
      onSubmit={onSubmit}
      defaultSelectValue={user.language || "es: Italian"}
      upperSelect="Chose your news language"
      btnLabel={"Save"}
    />
  );
};

export { NewsPreferencies };
