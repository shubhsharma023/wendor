// client/src/components/CancelReservation.jsx

import React, { useState } from 'react';
import { cancelReservation } from '../services/api';

const CancelReservation = ({ reservationId, onCancel }) => {
  const [message, setMessage] = useState('');

  const handleCancel = async () => {
    try {
      const response = await cancelReservation(reservationId);
      setMessage(response.data.message);
      onCancel(reservationId); // Remove from list after canceling
    } catch (error) {
      setMessage('Error cancelling reservation');
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleCancel}>Cancel Reservation</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CancelReservation;
