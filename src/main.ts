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

        this.middleware();
        this.routes();
        this.errorHandling();
    }

    public middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public routes() {
        this.app.get('/', (req, res) => {
            res.json({ message: 'Hello World!' });
        });
    }

    public errorHandling() {
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(500).json({ message: 'Something Went Wrong!', error: err.message });
        });
    }
}