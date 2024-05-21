import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
    res.status(200).send('Run program successfully!');
})