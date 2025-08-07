import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Typography, Box, CircularProgress
} from '@mui/material';

export default function Dispositivos() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/network/gpon-devices')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDevices(data);
        } else {
          setDevices([]);
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error" sx={{ textAlign: 'center' }}>
          No se pudo cargar la información de los dispositivos.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Dispositivos Conectados a la OLT
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Modelo</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>MAC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device, index) => (
              <TableRow key={index}>
                <TableCell>{device.model || 'N/A'}</TableCell>
                <TableCell>ONU</TableCell>
                <TableCell>{device.ip || 'N/A'}</TableCell>
                <TableCell>{device.mac || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
