import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

const Content = () => {
  return (
    <Flex
      as={motion.div}
      w="full"
      flexDir="column"
      justify={["center", "center", "flex-start"]}
      align={["center", "center", "flex-start"]}
      textAlign={["center", "center", "start"]}
      gap="4"
      initial={{
        x: -50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        display: "flex",
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Heading as="h1" fontWeight="medium" fontSize={["4xl", "6xl"]}>
        Welcome to
        <Text as="span" display="block">
          iDeep
          <Text as="span" color="primary" fontWeight="bold">
            Group
          </Text>
        </Text>
      </Heading>
      <Text letterSpacing="wide" maxW="600px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt
        minus molestias vero perferendis quibusdam
      </Text>

      <Button bg="primary">Contact Now</Button>
    </Flex>
  )
}

export default Content
