import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000'
});

export const getMarkers = async () => {
  return API.get('/v1/marker');
};

export const getMarker = async id => {
  return API.get(`/v1/marker/${id}`);
};

export const postMarker = async data => {
  return API.post('/v1/marker', data);
};

export const patchMarker = async (id, data) => {
  return API.patch(`/v1/marker/${id}`, data);
};

export const deleteMarker = async id => {
  return API.delete(`/v1/marker/${id}`);
};