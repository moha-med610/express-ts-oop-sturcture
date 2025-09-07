import axios from 'axios';

export class PrayerTimeService {
    private apiUrl: string | undefined;

    constructor() {
        this.apiUrl = process.env.PRAYER_API;
    }

    public async getPrayerTimes(city: string, country: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}?city=${city}&country=${country}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching prayer times:', error);
            throw error;
        }
    }
}