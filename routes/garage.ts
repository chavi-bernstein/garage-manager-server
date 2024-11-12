import express, { Router, Request, Response } from 'express';
import  {getGarages} from '../controllers/garageController';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  getGarages(req, res);
});

export default router;
