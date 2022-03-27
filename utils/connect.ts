import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("DbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("Database Connected");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
}

export default connect;
