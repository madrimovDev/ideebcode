import React from "react"
import { Box, Image } from "@chakra-ui/react"
import CubePng from "../../public/images/cube.png"
import { motion } from "framer-motion"

type CubePropsType = {
  left?: string
  top?: string
  bottom?: string
  right?: string
  w?: string
}

const Cube = (props: CubePropsType) => {
  return (
    <Box
      as={motion.div}
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 0.5,
        transition: {
          delay: 0.3
        }
      }}
      viewport={{
        once: true,
        amount: 0.8
      }}
      pos="absolute"
      top={props.top || ""}
      left={props.left || ""}
      bottom={props.bottom || ""}
      right={props.bottom || ""}
      w={props.w || "100px"}
      opacity="0.5"
      display={["none", "none", "block"]}
    >
      <Image w="full" src={CubePng.src} />
    </Box>
  )
}

export default Cube
