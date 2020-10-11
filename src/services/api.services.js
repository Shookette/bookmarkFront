import axios from 'axios';

const markerMock = [
  { id: '23DVDV', url: 'https://vimeo.com/43690647', title: 'Fred George - Programmer Anarchy', author: 'NDC Conferences', date: '2012-06-08 14:43:13', type: 'video', width: '300', height: '300', lenght: '30m' },
  { id: 'tototo', url: 'https://vimeo.com/126287950', title: 'Klaus teaser ©2015 Sergio Pablos Animation Studios, S.L. & ANTENA 3 FILMS, S.L.U. All rights reserved', author: 'The SPA Studios', date: '2015-04-28 13:58:47', type: 'video', width: '300', height: '300', lenght: '30m' },
  { id: 'ututut', url: 'https://live.staticflickr.com/65535/50434498323_0738e1e3f4_b.jpg', title: 'Vautour fauve - 0160915-2494', author: 'Photo Julien Raine', date: '12/12/2020', type: 'photo', width: '300', height: '300' }
];

const API = axios.create({
  baseURL: 'http://localhost:4000'
});

export const getMarkers = async () => {
  // return API.get(/markers)
  return markerMock;
};

export const getMarker = async id => {
  // return API.get(`/marker/${id}`)
  return markerMock.find(marker => marker.id === id);
};

export const postMarker = async data => {
  return API.post('/marker', data);
};

export const patchMarker = async (id, data) => {
  return API.patch(`/marker/${id}`, data);
};

export const deleteMarker = async id => {
  return API.delete(`/marker/${id}`);
};