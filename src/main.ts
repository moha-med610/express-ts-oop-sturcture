import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

export class App {
    public app: express.Application;

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
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(500).send('Something broke!');
        });
    }
}