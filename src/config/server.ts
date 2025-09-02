import { App } from "../main.js";
import chalk from "chalk";

const port = process.env.PORT || 3000;

const app = new App().app;

app.listen(port, async () => {
    console.log(chalk.bgGreen.bold(` Server is running on port ${port} `));
})