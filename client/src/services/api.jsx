// client/src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

// Get all carpenters and their slots
export const getCarpenters = () => api.get('/carpenters');

// Get available slots for a specific carpenter
export const getAvailableSlots = (carpenterId) =>
  api.get(`/slots/available/${carpenterId}`);

// Book a slot
export const bookSlot = (slotId, userName) =>
  api.post('/slots/book', { slotId, userName });

// Get user reservations
export const getUserReservations = (userName) =>
  api.get(`/reservations/user/${userName}`);

// Cancel a reservation
export const cancelReservation = (reservationId) =>
  api.post('/reservations/cancel', { reservationId });

export default api;
