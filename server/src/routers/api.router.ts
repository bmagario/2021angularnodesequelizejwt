import { Router } from 'express';

import { Cors } from '../cors';

const cors: Cors = new Cors()
const router: Router = Router();
router.use(cors.getOptions());
router.options('*', cors.getOptions());

router.route('/')
	.get((req, res) => {
		return res.json('Aguante la Birra');
	});

export default router;