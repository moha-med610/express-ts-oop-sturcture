import { Router } from 'express';
import { PrayerTimeController } from '../controllers/prayerTime.controller.js';

export class PrayerTimeRoutes {
  public router: Router;
  private prayerTimeController: PrayerTimeController;

  constructor() {
    this.router = Router();
    this.prayerTimeController = new PrayerTimeController();
    this.prayerRoutes();
  }

  public prayerRoutes() {
    this.router.get(
        "/prayer-times",
        this.prayerTimeController.getPrayerTimes.bind(this.prayerTimeController)
    );
  }
}
