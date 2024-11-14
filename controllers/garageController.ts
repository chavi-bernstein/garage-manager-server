// src/controllers/garageController.ts
import { Request, Response } from 'express';
import { mapToGarageDTO } from '../dtos/garageDTO';
import { Garage } from '../models/garage';
import { GarageApiResponse } from "../models/garageApiResponse";
import axios from 'axios';
import { mapToGarageData } from '../utils/garage.mapper';

/**
 * Creates a new garage document in the database.
 */
const createNewGarage = async (req: Request, res: Response) => {
    const { mispar_mosah, shem_mosah, cod_sug_mosah, sug_mosah, ktovet, yishuv, telephone, mikud, cod_miktzoa, miktzoa, menahel_miktzoa, rasham_havarot, TESTIME } = req.body;
    console.log("fnfmfm")

    try {
        console.log("posstttttt")
        const garage = await Garage.create({ mispar_mosah, shem_mosah, cod_sug_mosah, sug_mosah, ktovet, yishuv, telephone, mikud, cod_miktzoa, miktzoa, menahel_miktzoa, rasham_havarot, TESTIME });
        res.status(201).json(mapToGarageDTO(garage));
    } catch (error) {
        res.status(400).json({ message: 'Error creating garage', error });
    }
};

/**
 * Fetches all garages from an external API, saves them in the database,
 * and returns the stored garages as a JSON response.
 */
const getAllGarages = async (req: Request, res: Response) => {
    try {
        const response = await axios.get<GarageApiResponse>('https://data.gov.il/api/3/action/datastore_search', {
            params: {
                resource_id: 'bb68386a-a331-4bbc-b668-bba2766d517d',
                limit: 5,
            }
        });

        const garagesData = response.data.result.records.map(mapToGarageData);
        await Garage.insertMany(garagesData);

        const garages = await Garage.find().lean();
        res.json(garages.map(mapToGarageDTO));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching or saving garages', error });
    }
};

/**
 * Deletes a garage by its ID from the database and returns a confirmation message.
 */
const deleteGarage = async (req: Request, res: Response) => {
    try {
        const garage = await Garage.findByIdAndDelete(req.params.id);
        if (garage) {
            res.json({ message: `Garage ${garage.shem_mosah} deleted` });
        } else {
            res.status(404).json({ message: 'Garage not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error deleting garage', error });
    }
};

export { createNewGarage, getAllGarages, deleteGarage }
