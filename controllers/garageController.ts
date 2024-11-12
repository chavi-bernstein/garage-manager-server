import { Request, Response } from 'express';
import { fetchGarages } from '../repositories/garageRepository';

const getGarages = async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = parseInt(req.query.limit as string) || 5;
        const offset = parseInt(req.query.offset as string) || 0;

        const result = await fetchGarages(limit, offset);

        res.json(result);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export { getGarages };
