import express from 'express';
import mongoose from 'mongoose';
import tournamentsRouter from './tournamentsRouter.js';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://user:user@racinggame.u6bqurt.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/tournaments', tournamentsRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log('Server Started On ' + PORT));
  } catch (error) {
    console.log;
  }
}

startApp();
