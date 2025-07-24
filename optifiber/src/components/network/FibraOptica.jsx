import React from 'react';
import { Outlet } from 'react-router-dom';

const FibraOptica = () => {
  return (
    <div>
      <h2>Fibra Óptica</h2>
      <Outlet />
    </div>
  );
};

export default FibraOptica;
