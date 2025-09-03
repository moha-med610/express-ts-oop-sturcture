import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';
import dotenv from 'dotenv';

dotenv.config();

export class App {
    public app: Application;

    constructor() {
        this.app = express();
    }

    public middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public routes() {
        this.app.use('/', (req, res) => {
            res.send('Hello World!');
        });
    }

    public errorHandling() {
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(500).send('Something broke!');
        });
    }
}