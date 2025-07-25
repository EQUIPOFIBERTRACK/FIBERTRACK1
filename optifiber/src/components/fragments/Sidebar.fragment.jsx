import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";

const SidebarFragment = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.collapsed}`}>
      <button onClick={toggleSidebar} className={styles.toggleBtn}>
        ☰
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          {/* Agrega más links aquí */}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarFragment;
