import { Router } from 'express';

import { Cors } from '../cors';
import * as path from 'path'; 

const cors: Cors = new Cors()
const router: Router = Router();
router.use(cors.getOptions());
router.options('*', cors.getOptions());

// Catch all other routes and return the index file 
router.route('*')
	.get((req, res) => {
		res.sendFile(path.join(__dirname, 'public/index.html')); 
	});

export default router;