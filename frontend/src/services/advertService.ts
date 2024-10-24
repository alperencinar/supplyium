import api from './api';

export const getAllAdverts = () => api.get('/adverts');
export const getAdvertById = (id: string) => api.get(`/adverts/${id}`);
export const createAdvert = (advertData: any) => api.post('/adverts', advertData);
export const updateAdvert = (id: string, advertData: any) => api.put(`/adverts/${id}`, advertData);
export const deleteAdvert = (id: string) => api.delete(`/adverts/${id}`);
export const getAdvertsByType = (type: string) => api.get(`/adverts/type/${type}`);
export const getAdvertsByUser = (userId: string) => api.get(`/adverts/user/${userId}`);
