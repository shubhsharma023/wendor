// client/src/components/CarpenterList.jsx

import React, { useState, useEffect } from 'react';
import { getCarpenters } from '../services/api';
import SlotBooking from './SlotBooking';

const CarpenterList = () => {
  const [carpenters, setCarpenters] = useState([]);
  const [selectedCarpenter, setSelectedCarpenter] = useState(null);

  useEffect(() => {
    const fetchCarpenters = async () => {
      try {
        const response = await getCarpenters();
        setCarpenters(response.data);
      } catch (error) {
        console.error('Error fetching carpenters:', error);
      }
    };

    fetchCarpenters();
  }, []);

  const handleSelectCarpenter = (carpenter) => {
    setSelectedCarpenter(carpenter);
  };

  return (
    <div className="container">
      <h2>Select a Carpenter</h2>
      <div className="carpenter-selection">
        {carpenters.map((carpenter) => (
          <div
            key={carpenter.id}
            className="card"
            onClick={() => handleSelectCarpenter(carpenter)}
          >
            <h3>{carpenter.name}</h3>
            <button>Select</button>
          </div>
        ))}
      </div>
      {selectedCarpenter && <SlotBooking carpenter={selectedCarpenter} />}
    </div>
  );
};

export default CarpenterList;
