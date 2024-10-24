import api from './api';

export const getAllUsers = () => api.get('/users');
export const getUserById = (id: string) => api.get(`/users/${id}`);
export const createUser = (userData: any) => api.post('/users', userData);
export const updateUser = (id: string, userData: any) => api.put(`/users/${id}`, userData);
export const deleteUser = (id: string) => api.delete(`/users/${id}`);
