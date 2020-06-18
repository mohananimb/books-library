export const registerUserService = async request => {
  const response = await fetch("http://localhost:5000/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  });
  console.log("API ", response);

  const data = await response.json();

  console.log("data ", data);

  if (response.status >= 400) {
    throw new Error();
  }
  return data;
};

export const loginUserService = async request => {
  console.log("LOGIN API", request);

  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  });
  const data = await response.json();
  console.log("DATA ", data.token);

  return data.token;
};
