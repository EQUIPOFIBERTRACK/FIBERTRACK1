export const handleLogout = (navigate) => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('adminId');
    navigate('/')
}

export const handleHome = (navigate, adminId) => {
    const homeUrl = `/home/${adminId}`;
    navigate(homeUrl);
}

export const handleProfile = (navigate, adminId) => {
    const profileUrl = `/profile/${adminId}`;
    navigate(profileUrl)
}

export const handleTicket = (navigate, adminId) => {
    const ticketUrl = `/ticket/${adminId}`;
    navigate(ticketUrl);
}

export const handleCreateTicket = (navigate, adminId) => {
    const ticketUrl = `/ticket/create/${adminId}`;
    navigate(ticketUrl);
}

export const handleClients = (navigate, adminId) => {
    const clientsUrl = `/clients/${adminId}`;
    navigate(clientsUrl);
}

export const handleCreateClient = (navigate, adminId) => {
    const clientsUrl = `/clients/register/${adminId}`;
    navigate(clientsUrl);
}

export const handlePayments = (navigate, adminId) => {
    const paysUrl = `/payment/${adminId}`;
    navigate(paysUrl);
}

export const handleCreatePayment = (navigate, adminId) => {
    const paysUrl = `/payment/create/${adminId}`;
    navigate(paysUrl);
}

export const handlePackages = (navigate, adminId) => {
    const servicesUrl = `/packageServices/${adminId}`;
    navigate(servicesUrl);
}

export const handleCreatePackages = (navigate, adminId) => {
    const servicesUrl = `/packageServices/create/${adminId}`;
    navigate(servicesUrl);
}

export const handleRecoveryPassword = (navigate) => {
    const recoveryUrl = '/reset-password';
    navigate(recoveryUrl);
}

export const handleResetPassword = (navigate) => {
    const resetPassUrl = '/reset-password-new';
    navigate(resetPassUrl);
}

export const handleRadiofrecuencia = (navigate, adminId) => {
    const radioUrl = `/network/radiofrecuencia/${adminId}`;
    navigate(radioUrl);
}

export const handleFibraOptica = (navigate, adminId) => {
    const fibraUrl = `/network/fibra-optica/${adminId}`;
    navigate(fibraUrl);
}

export const handleMapaFibra = (navigate, adminId) => {
    const mapaUrl = `/network/fibra-optica/mapa/${adminId}`;
    navigate(mapaUrl);
}

export const handleTopologiaFibra = (navigate, adminId) => {
    const topologiaUrl = `/network/fibra-optica/topologia/${adminId}`;
    navigate(topologiaUrl);
}

export const handleDispositivosFibra = (navigate, adminId) => {
    const dispositivosUrl = `/network/fibra-optica/dispositivos/${adminId}`;
    navigate(dispositivosUrl);
}

export const handleLogsFibra = (navigate, adminId) => {
    const logsUrl = `/network/fibra-optica/logs/${adminId}`;
    navigate(logsUrl);
}