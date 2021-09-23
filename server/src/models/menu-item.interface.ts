export interface IMenuItem {
	name: string;
	path: string;
	icon: string;
	id_menu?: number;
	id_parent?: number;
	id_permission?: number;
	menu_order?: number;
	children?: IMenuItem[];
}
