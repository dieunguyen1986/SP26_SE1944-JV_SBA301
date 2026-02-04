import axiosClient from '@/shared/services/axiosClient';
const categoryService = {
    getCategories: async () => {
        // Simulate an API call to fetch categories
        const response = await axiosClient.get('/api/v1/categories');
        return response.data;
    },
}

export default categoryService;