const BASE_URL = "http://localhost:3000";

const HTTPClient = {
  checkToken: async () => {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL}/auth/verify-token`;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .catch((error) => new Error(`HTTP error! status: ${error.result}`));

      return response ? response : localStorage.clear();
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
