import express from 'express';
import './db_conn.js';
import dotenv from 'dotenv';
import configureRoutes from './routes/routes.js'
import cors from 'cors';
import corsOptions from './libs/cors.js';
import servicesRoutes from "./middlewares/servicesPackage.routes.js";

//Config
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

//rutas
configureRoutes(app)
app.use('/api/services', servicesRoutes);

//Server
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log('App running');
    console.log(`${process.env.HOST}:${process.env.PORT}/api`);
});