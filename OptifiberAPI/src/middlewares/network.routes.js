// middlewares/network.routes.js
import { Router } from 'express';
import { getOLTPorts, getNetworkHealthHistory, getDeviceInfo } from '../controller/network.controller.js';

const router = Router();

import { getOLTPorts, getNetworkHealthHistory, getDeviceInfo, getGponDevices } from '../controller/network.controller.js';
router.get('/gpon-devices', getGponDevices);

export default router;
