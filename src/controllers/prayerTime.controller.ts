import { Request, Response } from 'express';
import { PrayerTimeService } from '../services/prayerTime.service.js';

export class PrayerTimeController {
    private prayerTimeService: PrayerTimeService;

    constructor() {
        this.prayerTimeService = new PrayerTimeService();
    }

    public async getPrayerTimes(req: Request, res: Response): Promise<any> {
        const { city, country } = req.query;

        const prayerTimes = await this.prayerTimeService.getPrayerTimes(city as string, country as string);
        res.status(200).json({
            code: 200,
            status: 'success',
            data: prayerTimes
        });
    }
}