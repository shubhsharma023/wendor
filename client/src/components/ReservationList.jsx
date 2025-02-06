// client/src/components/ReservationList.jsx

import React, { useState, useEffect } from 'react';
import { getUserReservations } from '../services/api';
import CancelReservation from './CancelReservation';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      if (userName) {
        try {
          const response = await getUserReservations(userName);
          setReservations(response.data);
        } catch (error) {
          console.error('Error fetching reservations:', error);
        }
      }
    };

    fetchReservations();
  }, [userName]);

  const handleCancel = (reservationId) => {
    setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.id !== reservationId)
    );
  };

  return (
    <div className="container">
      <h2>Your Reservations</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="input"
      />
      <div>
        {reservations.length === 0 && <p>No reservations found.</p>}
        {reservations.map((reservation) => (
          <div key={reservation.id} className="card">
            <div className="reservation-item">
              <span>
                {reservation.slot?.time} with {reservation.slot?.carpenter?.name || 'Unknown Carpenter'}
              </span>
              <CancelReservation reservationId={reservation.id} onCancel={handleCancel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
