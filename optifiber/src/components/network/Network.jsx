import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Network = () => {
  const { adminId } = useParams();

  return (
    <div>
      <h2>Network</h2>
      <ul>
        <li>
          <Link to={`/network/radiofrecuencia/${adminId}`}>Radiofrecuencia</Link>
        </li>
        <li>
          <Link to={`/network/fibra-optica/${adminId}`}>Fibra Óptica</Link>
        </li>
      </ul>
    </div>
  );
};

export default Network;
