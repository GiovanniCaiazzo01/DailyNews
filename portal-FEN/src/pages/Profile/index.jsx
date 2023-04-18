import React from "react";
import {
  NewsPreferencies,
  PageHeader,
  UserInfoForm,
} from "../../common/components";
import { ToastContainer, toast } from "react-toastify";
import { HTTPClient } from "../../api/HTTPClients";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

import "./style.css";

const Profile = () => {
  const userInfo = useUser();
  const { verify_auth } = useAuth();

  const handleAlert = (result, message) => {
    result
      ? toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
  };

  const onSave = async (event, user) => {
    event.preventDefault();
    const merged_user_info = { ...userInfo.user, ...user };
    verify_auth();
    const updateUser = await HTTPClient.put("/users/update", merged_user_info);
    handleAlert(updateUser.result, updateUser.message);

    userInfo.fetchUser();
  };

  return (
    <>
      <PageHeader />
      <UserInfoForm onSave={onSave} userInfo={userInfo} />
      <NewsPreferencies onSave={onSave} userInfo={userInfo} />
      <ToastContainer />
    </>
  );
};

export { Profile };
