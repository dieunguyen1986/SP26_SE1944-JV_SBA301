import axiosClient from "@/shared/services/axiosClient";
const categoryService = {
  getCategories: async () => {
    // Simulate an API call to fetch categories
    const response = await axiosClient.get("/categories");
    
    return response.data;
  },

  createCategory: async (payload) => {
    const response = await axiosClient.post("/categories", payload);
    console.log("Create status: " + response.status);
    return response.data;
  },

  findById: async (id) => {
    const response = await axiosClient.get(`/categories/${id}`);
    return response.data;
  },

  delete: async(id) => {

    return await axiosClient.delete(`/categories/${id}`);
  }
};

export default categoryService;
