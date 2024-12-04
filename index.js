
const detenv = require("dotenv")

const connectToDatabase = require("./src/database/connect");

detenv.config();


connectToDatabase();

require("./modules/express")
