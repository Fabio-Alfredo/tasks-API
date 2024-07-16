import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import  {dbConnection}  from './confing/dbConnection.js'

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

dbConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
