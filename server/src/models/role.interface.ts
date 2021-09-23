import { IPermission } from './permission.interface';

export interface IRole {
	id_role: number;
	name: string;
	description: string;
	permissions?: IPermission[];
	id_status?: number;
	created_at?: string;
	updated_at?: string;
}
