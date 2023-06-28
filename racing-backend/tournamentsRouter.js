import Router from 'express';
import TournamentController from './TournamentController.js';

const router = new Router();

router.get('/', TournamentController.getAll);
router.post('/', TournamentController.create);
router.get('/:id', TournamentController.getOne);
router.delete('/:id', TournamentController.delete);
router.put('/', TournamentController.update);

export default router;
