import api from './api';

export const getAllOffers = () => api.get('/offers');
export const getOfferById = (id: string) => api.get(`/offers/${id}`);
export const createOffer = (offerData: any) => api.post('/offers', offerData);
export const updateOffer = (id: string, offerData: any) => api.put(`/offers/${id}`, offerData);
export const deleteOffer = (id: string) => api.delete(`/offers/${id}`);
export const getOffersByAdvert = (advertId: string) => api.get(`/offers/advert/${advertId}`);
export const getOffersByUser = (userId: string) => api.get(`/offers/user/${userId}`);
