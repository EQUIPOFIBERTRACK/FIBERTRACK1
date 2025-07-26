import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './css/navbar.module.css';

import { handleHome, handleLogout, handleProfile, handleTicket, handleCreateTicket } from './js/Routes.js';
import { handleClients, handleCreateClient, handlePayments, handleCreatePayment } from './js/Routes.js';
import { handlePackages, handleCreatePackages } from './js/Routes.js';

export function NavbarFragmentAll() {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const adminId = sessionStorage.getItem('adminId');

    // Estados para mostrar/ocultar submenús
    const [showClients, setShowClients] = useState(false);
    const [showPayments, setShowPayments] = useState(false);
    const [showTickets, setShowTickets] = useState(false);
    const [showPackages, setShowPackages] = useState(false);
    const [showNetwork, setShowNetwork] = useState(false);
    const [showFibra, setShowFibra] = useState(false);

    // Estado para expandir/colapsar menú
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const name = sessionStorage.getItem('userName');
        setName(name);
    }, []);

    return (
        <nav className={`d-flex flex-column shadow top-0 left-0 vh-100 px-2 py-3 ${styles['main-menu']} ${expanded ? styles.expanded : styles.collapsed}`}>
            <div className="d-flex justify-content-between align-items-center mb-3 header-content">
                <i
                    className="bi bi-list fs-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setExpanded(e => !e)}
                ></i>
                <p
                    className={`mb-0 ms-2 ${styles.title} ${expanded ? styles.show : styles.hide}`}
                    onClick={() => handleHome(navigate, adminId)}
                    role="button"
                >
                    FIBERTRACK
                </p>
            </div>

            <ul className="nav flex-column mb-auto">
                {/* Inicio */}
                <li className="nav-item item">
                    <a
                        className="nav-link d-flex align-items-center item-link"
                        onClick={() => handleHome(navigate, adminId)}
                        role="button"
                    >
                        <i className="bi bi-house-door-fill me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Inicio</span>
                    </a>
                </li>
                {/* Clientes */}
                <li className="nav-item item"
                    onMouseEnter={() => setShowClients(true)}
                    onMouseLeave={() => setShowClients(false)}>
                    <a className="nav-link d-flex align-items-center item-link" role="button">
                        <i className="bi bi-people-fill me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Clientes</span>
                    </a>
                    {showClients && (
                        <ul className="list-unstyled ps-3 sub-menu">
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleClients(navigate, adminId)} role="button">Ver</a>
                            </li>
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleCreateClient(navigate, adminId)} role="button">Crear</a>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Pagos */}
                <li className="nav-item item"
                    onMouseEnter={() => setShowPayments(true)}
                    onMouseLeave={() => setShowPayments(false)}>
                    <a className="nav-link d-flex align-items-center item-link" role="button">
                        <i className="bi bi-wallet-fill me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Pagos</span>
                    </a>
                    {showPayments && (
                        <ul className="list-unstyled ps-3 sub-menu">
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handlePayments(navigate, adminId)} role="button">Ver</a>
                            </li>
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleCreatePayment(navigate, adminId)} role="button">Crear</a>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Tickets */}
                <li className="nav-item item"
                    onMouseEnter={() => setShowTickets(true)}
                    onMouseLeave={() => setShowTickets(false)}>
                    <a className="nav-link d-flex align-items-center item-link" role="button">
                        <i className="bi bi-clipboard-heart-fill me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Tickets</span>
                    </a>
                    {showTickets && (
                        <ul className="list-unstyled ps-3 sub-menu">
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleTicket(navigate, adminId)} role="button">Ver</a>
                            </li>
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleCreateTicket(navigate, adminId)} role="button">Crear</a>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Paquetes */}
                <li className="nav-item item"
                    onMouseEnter={() => setShowPackages(true)}
                    onMouseLeave={() => setShowPackages(false)}>
                    <a className="nav-link d-flex align-items-center item-link" role="button">
                        <i className="bi bi-box2-heart-fill me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Paquetes</span>
                    </a>
                    {showPackages && (
                        <ul className="list-unstyled ps-3 sub-menu">
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handlePackages(navigate, adminId)} role="button">Ver</a>
                            </li>
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => handleCreatePackages(navigate, adminId)} role="button">Crear</a>
                            </li>
                        </ul>
                    )}
                </li>
                {/* NetWork */}
                <li className="nav-item item"
                    onMouseEnter={() => setShowNetwork(true)}
                    onMouseLeave={() => setShowNetwork(false)}>
                    <a className="nav-link d-flex align-items-center item-link" role="button">
                        <i className="bi bi-wifi me-2"></i>
                        <span className={`item-title ${expanded ? styles.show : styles.hide}`}>NetWork</span>
                    </a>
                    {showNetwork && (
                        <ul className="list-unstyled ps-3 sub-menu">
                            <li className="ms-4">
                                <a className="nav-link" onClick={() => navigate(`/network/radiofrequencia/${adminId}`)} role="button">Radiofrecuencia</a>
                            </li>
                            <li className="ms-4"
                                onMouseEnter={() => setShowFibra(true)}
                                onMouseLeave={() => setShowFibra(false)}>
                                <a className="nav-link" role="button">Fibra Óptica</a>
                                {showFibra && (
                                    <ul className="list-unstyled ps-3 sub-menu">
                                        <li className="ms-4">
                                            <a className="nav-link" onClick={() => navigate(`/network/fibra-optica/mapa/${adminId}`)} role="button">Mapa</a>
                                        </li>
                                        <li className="ms-4">
                                            <a className="nav-link" onClick={() => navigate(`/network/fibra-optica/topologia/${adminId}`)} role="button">Topología</a>
                                        </li>
                                        <li className="ms-4">
                                            <a className="nav-link" onClick={() => navigate(`/network/fibra-optica/dispositivos/${adminId}`)} role="button">Dispositivos</a>
                                        </li>
                                        <li className="ms-4">
                                            <a className="nav-link" onClick={() => navigate(`/network/fibra-optica/logs/${adminId}`)} role="button">Logs</a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="mt-auto border-div">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a
                            className="nav-link d-flex align-items-center item-link"
                            onClick={() => handleProfile(navigate, adminId)}
                            role="button"
                        >
                            <i className="bi bi-person-circle me-2"></i>
                            <span className={`item-title ${expanded ? styles.show : styles.hide}`}>{name || 'Iniciar Sesión'}</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link d-flex align-items-center item-link"
                            onClick={() => handleLogout(navigate, adminId)}
                            role="button"
                        >
                            <i className="bi bi-door-closed-fill me-2"></i>
                            <span className={`item-title ${expanded ? styles.show : styles.hide}`}>Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}