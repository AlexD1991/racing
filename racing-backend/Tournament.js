import mongoose from 'mongoose';

const Tournament = new mongoose.Schema({
  name: { type: String, required: true },
  game: { type: String, required: true },
});

export default mongoose.model('Tournament', Tournament);


