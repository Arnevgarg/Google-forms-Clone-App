import { Router } from 'express';
import { submitForm, readForm } from '../controllers/formController';

const router = Router();

router.post('/submit', submitForm);
router.get('/read', readForm);

export default router;
