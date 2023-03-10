const BASE_URL = "http://localhost:3000";

const HTTPClient = {
  get: async (path, queryParams) => {
    let url = `${BASE_URL}${path}`;
    if (queryParams) {
      const query = new URLSearchParams(queryParams);
      url += `?${query.toString()}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
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
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
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
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export { HTTPClient };
