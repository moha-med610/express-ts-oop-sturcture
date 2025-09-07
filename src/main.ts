import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';
import dotenv from 'dotenv';
import { PrayerTimeRoutes } from './routes/prayerTime.routes.js';

dotenv.config();

export class App {
    public app: Application;
    private prayerTimeRoutes: PrayerTimeRoutes;

    constructor() {
        this.app = express();
        this.prayerTimeRoutes = new PrayerTimeRoutes();

        this.middleware();
        this.routes();
        this.errorHandling();
    }

    public middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public routes() {
        this.app.use('/api', this.prayerTimeRoutes.router);
    }

    public errorHandling() {
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(500).send('Something Went Wrong!');
        });
    }
}