import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { RefObject } from "react"
import Media from "./media"
import ServicesList from "./services"

type ServicesPropsType = {
  refObj: RefObject<HTMLDivElement> | null
}

const Services = ({ refObj }: ServicesPropsType) => {
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      mb="150px"
      ref={refObj}
      id="ourservices"
      justify="space-between"
      align="center"
      gap={["10", "10", "0"]}
    >
      <ServicesList />
      <Media />
    </Flex>
  )
}

export default Services
