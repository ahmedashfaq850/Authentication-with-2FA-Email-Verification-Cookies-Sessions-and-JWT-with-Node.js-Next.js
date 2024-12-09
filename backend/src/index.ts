import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/app.config";


const app = express();
const BASE_PATH = config.BASE_PATH

app.use(cors({origin: config.APP_ORIGIN, credentials: true}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: "Hello World!"});
})


app.listen(config.PORT, async () => {
    console.log(`Server is running on port ${config.PORT}}`);
})