import React from "react"
import { Box, Image } from "@chakra-ui/react"
import Person from "../../public/images/character.png"
import { motion } from "framer-motion"
import { once } from "events"

const Media = () => {
  return (
    <Box
      as={motion.div}
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.7 }}
      w="full"
      maxW={["200px", "300px", "400px"]}
    >
      <Image w="full" src={Person.src} />
    </Box>
  )
}

export default Media
