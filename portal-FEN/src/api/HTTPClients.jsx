const BASE_URL = "https://daily-news-ben.onrender.com";

const HTTPClient = {
  logout: async () => {
    localStorage.removeItem("token");
  },
  checkToken: async () => {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL}/auth/verify-token`;
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : { Authorization: "" };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .catch((error) => new Error(`HTTP error! status: ${error}`));

      if (!response) {
        localStorage.clear();
      }
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  get: async (path, params) => {
    let url;
    params
      ? (url = `${BASE_URL}${path}/${params}`)
      : (url = `${BASE_URL}${path}`);
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
        .catch((error) => new Error(`HTTP error! status: ${error}`));

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
        .catch((error) => new Error(`HTTP error! status: ${error}`));
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
        .catch((error) => new Error(`HTTP error! status: ${error}`));

      return await response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  delete: async (path, param, body) => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(`${BASE_URL}${path}${param || ""}`, {
        method: "delete",
        mode: "cors",
        headers,
        body: JSON.stringify(body),
      })
        .then((result) => result.json())
        .catch((error) => new Error(`HTTP error! status: ${error}`));

      return await response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export { HTTPClient };
