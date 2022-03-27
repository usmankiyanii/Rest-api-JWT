import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import connect from "../utils/connect";
import logger from "../utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");

const app = express();
app.use(deserializeUser);
app.use(express.json());

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
});
