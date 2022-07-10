import { IconType } from "react-icons"
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"

export type SocialLink = {
  name: string
  url: string
  icon: IconType
}

const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		url: '',
		icon: AiFillFacebook,
  },
  {
    name: 'Instagram',
    url: '',
    icon: AiFillInstagram
  },
  {
    name: 'Github',
    url: '',
    icon: AiFillGithub
  },
  {
    name: "Twitter",
    url: '',
    icon: AiFillTwitterSquare
  }
]

export default socialLinks