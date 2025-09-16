import api from './api';

export const authService = {
  // Login user
  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    return response;
  },

  // Register new user
  register: async (userData) => {
    const response = await api.post('/register', userData);
    return response;
  },

  // Logout user
  logout: async () => {
    const response = await api.post('/logout');
    return response;
  },

  // Get current user profile
  getProfile: async () => {
    const response = await api.get('/user');
    return response;
  },

  // Update user profile
  updateProfile: async (userData) => {
    const response = await api.put('/user', userData);
    return response;
  },

  // Request password reset
  forgotPassword: async (email) => {
    const response = await api.post('/forgot-password', { email });
    return response;
  },

  // Reset password
  resetPassword: async (resetData) => {
    const response = await api.post('/reset-password', resetData);
    return response;
  }
};