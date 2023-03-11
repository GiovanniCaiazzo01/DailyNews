import React from "react";
const BASE_URL = "http://localhost:3000";

const HTTPClient = {
  get: async (path) => {
    let url = `${BASE_URL}${path}`;
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers,
      })
        .then((result) => result.json())
        .catch((error) => new Error(`HTTP error! status: ${error.result}`));

      return await response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  post: async (path, body) => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "post",
        mode: "cors",
        headers,
        body: JSON.stringify(body),
      })
        .then((result) => result.json())
        .catch((error) => new Error(`HTTP error! status: ${error.result}`));
      return await response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  put: async (path, body) => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "put",
        mode: "cors",
        headers,
        body: JSON.stringify(body),
      })
        .then((result) => result.json())
        .catch((error) => new Error(`HTTP error! status: ${error.result}`));

      return await response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export { HTTPClient };
