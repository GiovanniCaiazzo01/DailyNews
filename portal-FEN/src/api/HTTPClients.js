const base_url = "http://localhost:3000";

const HTTPClient = {
  get: async (path) => {
    return await fetch(base_url + path, {
      method: "get",
    }).catch((error) => console.log(error));
  },
  post: async (path, body) => {
    return await fetch(base_url + path, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => console.log(error));
  },
};

export { HTTPClient };
