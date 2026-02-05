import axiosClient from "@/shared/services/axiosClient";
const categoryService = {
  getCategories: async () => {
    // Simulate an API call to fetch categories
    const response = await axiosClient.get("/api/v1/categories");
    return response.data;
  },

  createCategory: async (payload) => {
    const response = await axiosClient.post("/api/v1/categories", payload);
    console.log("Create status: " + response.status);
    return response.data;
  },

  findById: async (id) => {
    const response = await axiosClient.get(`/api/v1/categories/${id}`);
    return response.data;
  },
};

export default categoryService;
