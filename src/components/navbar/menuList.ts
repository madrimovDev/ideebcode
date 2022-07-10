import { IconType } from 'react-icons'
import {
	AiOutlineContacts,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlineSetting,
	AiOutlineTeam,
} from 'react-icons/ai'

export type MenuLink = {
	name: string
	href: string
	icon: IconType
}

const menuList: MenuLink[] = [
	{
		name: 'Home',
		href: 'home',
		icon: AiOutlineHome,
	},
	{
		name: 'Our Services',
		href: 'ourservices',
		icon: AiOutlineSetting,
	},
	{
		name: 'Projects',
		href: 'projects',
		icon: AiOutlineProject,
	},
	{
		name: 'Our Team',
		href: 'ourteam',
		icon: AiOutlineTeam,
	},
	{
		name: 'Contact',
		href: 'contact',
		icon: AiOutlineContacts,
	},
]

export default menuList
