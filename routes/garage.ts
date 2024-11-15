// src/routes/garageRoutes.ts
import express from 'express';
import { createNewGarages, getAllGarages, deleteGarage } from '../controllers/garageController';

const router = express.Router();

router.post('/', createNewGarages);
router.get('/', getAllGarages);
router.delete('/:id', deleteGarage);

export default router;
