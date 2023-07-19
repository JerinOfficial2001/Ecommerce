import { url } from "../redux/api";

export const createUser = async (userType, uname, email, password) => {
  try {
    await fetch(url + "/auth/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userType,
        uname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};
