import { Request, Response } from 'express';
import { fetchGarages } from '../repositories/garageRepository'; // Correct named import

const getGarages = async (req: Request, res: Response): Promise<void> => {
    try {
        // מקבלים את הפרמטרים limit ו-offset מתוך ה-query
        const limit = parseInt(req.query.limit as string) || 5;
        const offset = parseInt(req.query.offset as string) || 0;

        // פונים למאגר הנתונים כדי להביא את המוסכים
        const result = await fetchGarages(limit, offset);

        // מחזירים את התוצאה כ-JSON
        res.json(result);
    } catch (error) {
        if (error instanceof Error) {
            // If it's an instance of Error, handle it as such
            res.status(500).json({ message: error.message });
        } else {
            // Handle unexpected error type
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export { getGarages };
