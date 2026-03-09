import axiosClient from "../../../shared/services/axiosClient";

const categoryService = {
  getCategories: async () => {
    // Get token from localStorage and include it in the request headers
    const token = localStorage.getItem("accessToken");
    console.log("Token: " + token);

    // Make the API request with the Authorization header
    const response = await axiosClient.get("/categories", {
       headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  createCategory: async (payload) => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosClient.post("/categories", payload, {
      headers: { "Authorization": `Bearer ${token}` },
    });
    console.log("Create status: " + response.status);
    return response.data;
  },

  findById: async (id) => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosClient.get(`/categories/${id}`, {
      headers: { "Authorization": `Bearer ${token}` },
    });
    return response.data;
  },

  delete: async (id) => {
    const token = localStorage.getItem("accessToken");
    return await axiosClient.delete(`/categories/${id}`, {
      headers: { "Authorization": `Bearer ${token}` },
    });
  },
};

export default categoryService;
