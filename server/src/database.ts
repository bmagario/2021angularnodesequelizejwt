// import { createPool } from 'mysql2/promise';

// export async function connect() {
// 	const connection = await createPool({
// 		host: process.env.DB_HOST,
// 		user: process.env.DB_USER,
// 		password: process.env.DB_PWD,
// 		database: process.env.DB_DATABASE,
// 		connectionLimit: 10
// 	});

// 	return connection;
// }

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
	process.env.DB_DATABASE || "",
	process.env.DB_USER || "",
	process.env.DB_PWD || "",
	{
		host: process.env.DB_HOST,
		dialect: 'mariadb',
		// models: [__dirname + '/models']
	}
);

console.log(sequelize);