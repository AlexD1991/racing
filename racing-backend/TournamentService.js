import Tournament from './Tournament.js';

class TournamentService {
  async create(tournament) {
    return await Tournament.create(tournament);
  }

  async getAll() {
    return await Tournament.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id is not provided!');
    }
    return await Tournament.findById(id);
  }

  async delete(id) {
    if (!id) {
      throw new Error('id is not provided!');
    }
    return await Tournament.findByIdAndDelete(id);
  }

  async update(tournament) {
    if (!tournament._id) {
      res.status(400).json({ message: `[${tournament._id}] id is not found!` });
    }
    return await Tournament.findByIdAndUpdate(tournament._id, tournament, {
      new: true,
    });
  }
}

export default new TournamentService();
