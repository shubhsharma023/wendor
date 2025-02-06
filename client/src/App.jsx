// client/src/App.jsx

import React from 'react';
import CarpenterList from './components/CarpenterList';
import ReservationList from './components/ReservationList';
import ErrorBoundary from './components/ErrorBoundary';


const App = () => {
  return (
    <div>
      <h1>Urban Company Booking System</h1>
      <CarpenterList />
      <ErrorBoundary>
      <ReservationList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
