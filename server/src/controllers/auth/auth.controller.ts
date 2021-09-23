import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../../models/User';

export class AuthController {
	
	async login(req: Request, res: Response) {
		const username: string = req.body.username;
		const password: string = req.body.password;
		const user = await new User();
		// const user2 = await user.getUser();
		// const user = userResult[0];

		const token: string = jwt.sign({
			user_id: 'test'
		}, 
		process.env.JWT_SECRET || 'TOKENTEST'); 
		
		res
		.header(process.env.JWT_TOKEN_NAME || 'tokenauth', token)
		.json(user);
	}

}
