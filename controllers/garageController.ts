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
const createNewGarages = async (req: Request, res: Response): Promise<void> => {
    const garagesData = Array.isArray(req.body) ? req.body : [req.body];

    try {
        await Garage.insertMany(garagesData, { ordered: false });
        res.status(201).json({ message: "Garages inserted successfully." });
    } catch (error: any) {
        if (error.code === 11000) {
            console.log("Duplicate data found. Skipping insertion for existing records.");
            res.status(409).json({ message: "Some garages already exist in the database." });
        } else {
            console.error("Error inserting garages:", error);
            res.status(500).json({ message: "Error inserting garages", error });
        }
    }
};



/**
 * Fetches all garages from an external API, saves them in the database,
 * and returns the stored garages as a JSON response.
 */
const getAllGarages = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.get<GarageApiResponse>('https://data.gov.il/api/3/action/datastore_search', {
            params: {
                resource_id: 'bb68386a-a331-4bbc-b668-bba2766d517d',
                limit: 5,
            }
        });

        const garagesData = response.data.result.records.map(mapToGarageData);

        // Attempt to insert data
        try {
            await Garage.insertMany(garagesData, { ordered: false });
        } catch (error: any) {
            if (error.code === 11000) {
                console.log("Duplicate data found. Returning existing data from the database.");
            } else {
                throw error;
            }
        }

        // Retrieve garages from database
        const garages = await Garage.find().lean();
        res.json(garages.map(mapToGarageDTO));

    } catch (error) {
        console.error("Error fetching or saving garages:", error);
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

export { createNewGarages, getAllGarages, deleteGarage }
