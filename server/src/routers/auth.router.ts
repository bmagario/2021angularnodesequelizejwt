import { Router } from 'express';

import { Cors } from '../cors';
import { AuthController } from './../controllers/auth/auth.controller';

const cors: Cors = new Cors()
const router: Router = Router();
router.use(cors.getOptions());
router.options('*', cors.getOptions());

router.route('/login')
	.post((req, res) => {
		const auth = new AuthController();
		return auth.login(req, res);
	});

export default router;