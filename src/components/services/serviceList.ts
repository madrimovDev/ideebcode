import { IconType } from "react-icons"
import {
  MdOutlineDataSaverOff,
  MdOutlineDesignServices,
  MdOutlineShoppingBag,
  MdOutlineWeb,
  MdPhoneAndroid,
} from "react-icons/md"
import { AiOutlineRobot } from "react-icons/ai"

export type Service = {
  icon: IconType
  name: string
  delay: number
}

const serviceList: Service[] = [
  {
    delay: 1,
    name: "UX/UI Design",
    icon: MdOutlineDesignServices,
  },
  {
    delay: 2,
    name: "Web Sites",
    icon: MdOutlineWeb,
  },
  {
    delay: 3,
    name: "Mobile App",
    icon: MdPhoneAndroid,
  },
  {
    delay: 4,
    name: "E-commerce",
    icon: MdOutlineShoppingBag,
  },
  {
    delay: 5,
    name: "Telegram Bots",
    icon: AiOutlineRobot,
  },
  {
    delay: 6,
    name: "Data Since",
    icon: MdOutlineDataSaverOff,
  },
]

export default serviceList
