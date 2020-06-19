export const registerUserService = async request => {
  const response = await fetch("http://localhost:5000/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  });

  if (response.status >= 400) {
    throw new Error();
  }
  
  const data = await response.json();
  return data;
};

export const loginUserService = async request => {

  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  });

  if (response.status >= 400) {
    throw new Error("Invalid Credentials");
  }

  const data = await response.json();
  return data.token;
};
