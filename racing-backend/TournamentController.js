import Tournament from './Tournament.js';
import TournamentService from './TournamentService.js';

class TournamentController {
  async create(req, res) {
    try {
      const tournament = await TournamentService.create(req.body);
      return res.json(tournament);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const tournaments = await TournamentService.getAll();
      return res.json(tournaments);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const tournament = await TournamentService.getOne(id);

      return res.json(tournament);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const updatedTournament = await TournamentService.delete(id);

      return res.json(updatedTournament);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedTournament = await TournamentService.update(req.body);

      return res.json(updatedTournament);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default new TournamentController();
