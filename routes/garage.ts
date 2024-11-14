// src/routes/garageRoutes.ts
import express from 'express';
import { createNewGarage, getAllGarages, deleteGarage } from '../controllers/garageController';

const router = express.Router();

router.post('/', createNewGarage);
router.get('/', getAllGarages);
router.delete('/:id', deleteGarage);

export default router;
