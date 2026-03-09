import axiosClient from "../../../shared/services/axiosClient";

const auth = {
  login: async (payload) => {

    const response = await axiosClient.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });
    
    return response.data;

    //  const userResult = users.find((user)=> user.email.toLowerCase()=== payload.email.toLowerCase() && user.password === payload.password)
    
    // return {...userResult, accessToken: "DEMO_TOKEN"}
    
    // if (
    //   payload.email === "admin@example.com" &&
    //   payload.password === "123456"
    // ) {
    //   return {
    //     id: 1,
    //     name: "John",
    //     email: "admin@example.com",
    //     role: "Admin",
    //     accessToken: "DEMO_TOKEN",
    //   };
    // } else throw new Error("Invalid credentials!");
  },
  me: async () => {},
  register: (payload) => {
    console.log("Registering user:", payload);

    if (payload.term) {
      const promise = window.fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      return promise;
    }

    return new Promise(function(reject){
      reject("You need to agree the terms!");
    })
  },

  logout: async () => {},
  forgotPassword: async () => {},

  refreshToken: async () => {},
};

export default auth;
