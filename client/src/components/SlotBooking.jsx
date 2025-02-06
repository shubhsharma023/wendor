// client/src/components/SlotBooking.jsx

import React, { useState, useEffect } from 'react';
import { getAvailableSlots, bookSlot } from '../services/api';

const SlotBooking = ({ carpenter }) => {
  const [slots, setSlots] = useState([]);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await getAvailableSlots(carpenter.id);
        setSlots(response.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, [carpenter]);

  const handleBooking = async (slotId) => {
    if (!userName) {
      setMessage('Please enter your name.');
      return;
    }
    try {
      const response = await bookSlot(slotId, userName);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error booking slot');
    }
  };

  return (
    <div className="container">
      <h3>Available Slots for {carpenter.name}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="input"
      />
      <div className="slot-container">
        {slots.map((slot) => (
          <div key={slot.id} className="slot-item">
            <span>{slot.time}</span>
            <button className="btn" onClick={() => handleBooking(slot.id)}>Book Slot</button>
          </div>
        ))}
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SlotBooking;
