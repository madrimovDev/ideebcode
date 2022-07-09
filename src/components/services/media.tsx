import React from "react"
import { Box, Image } from "@chakra-ui/react"
import Computer from "../../public/images/computer.png"
import { motion } from "framer-motion"

const Media = () => {
  return (
    <Box
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      }}
      viewport={{
        amount: 0.8,
        once: true,
      }}
      w={["80%", "80%", "40%", "50%"]}
      maxW="400px"
    >
      <Image w="full" src={Computer.src} />
    </Box>
  )
}

export default Media
