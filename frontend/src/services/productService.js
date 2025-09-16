import api from './api';

export const productService = {
    getProducts: async (params = {}) => {
        try {
            const response = await api.get('/products', { params });

            return {
                data: response.data.data || response.data,
                meta: response.data.meta || {
                    total: (response.data.data ? response.data.data.length : response.data.length) || 0,
                    current_page: 1,
                    per_page: params.per_page || 12,
                    last_page: 1,
                    from: 1,
                    to: (response.data.data ? response.data.data.length : response.data.length) || 0
                }
            };
        } catch (error) {
            console.error('Error fetching products:', error);
            return {
                data: [],
                meta: {
                    total: 0,
                    current_page: 1,
                    per_page: params.per_page || 12,
                    last_page: 1,
                    from: 0,
                    to: 0
                }
            };
        }
    },

    getProduct: async (id) => {
        try {
            const response = await api.get(`/products/${id}`);
            return { data: response.data.data || response.data };
        } catch (error) {
            console.error('Error fetching product:', error);
            return { data: null };
        }
    },

    getCategories: async () => {
        try {
            const response = await api.get('/categories');
            return { data: response.data.data || response.data };
        } catch (error) {
            console.error('Error fetching categories:', error);
            return { data: [] };
        }
    }
};
