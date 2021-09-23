import { Router } from 'express';

import { Cors } from '../cors';
import { Test } from '../controllers/test.controller';

const cors: Cors = new Cors()
const router: Router = Router();
router.use(cors.getOptions());
router.options('*', cors.getOptions());

router.route('/')
	.get((req, res) => {
		// const test = new Test();
		// return test.test(req, res);
	});

export default router;