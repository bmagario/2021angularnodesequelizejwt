import { Model, DataTypes, QueryTypes } from "sequelize";
import { sequelize } from "../database";

import { IRole } from './role.interface';

export interface IUser {
	id_user: number;
	first_name: string;
	last_name: string;
	email: string;
	position?: string;
	roles?: IRole;
	email_verified_at?: string;
	created_at?: string;
	updated_at?: string;
}

export class User extends Model {
  public id_user!: number;
  public password!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public position!: string | null;
  public email_verified_at!: string | null;
  public created_at!: string | null;
  public updated_at!: string | null;
}

// const userResult = await conn.query("SELECT * FROM user WHERE email = ?", [username]);

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    last_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "user",
    sequelize, // passing the `sequelize` instance is required
  }
);

async function getUser() {
  const query: string =
  `
  SELECT 
    * 
  FROM 
    user 
  WHERE 
    email = :email
  `;

  const user = await sequelize.query(
    query,
    {
      replacements: { 
        email: 'brian.magario@gmail.com' 
      },
      type: QueryTypes.SELECT
    }
  );
  if (user === null) {
    return;
  }
  console.log(user);
}