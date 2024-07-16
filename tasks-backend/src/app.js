import express from 'express';
import cors from 'cors';
import {router} from './route/index.js';
import 'dotenv/config';
import  {dbConnection}  from './confing/dbConnection.js'


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router)
dbConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
