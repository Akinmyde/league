import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT;

const opts = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.DATABASE_URL, opts);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error.'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/api', routes);

app.listen(port, () => {
    console.log(chalk.green(`App is listening on port ${port}`))
})

export default app;
