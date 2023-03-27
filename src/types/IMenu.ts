export interface IDropdownItem {
	name: string
	link: string
}

export interface IMenuItems {
	name: string
	link: string
	menu?: IDropdownItem[]
}
