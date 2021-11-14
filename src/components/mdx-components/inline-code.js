import { chakra, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export const InlineCode = (props) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue("purple.500", "purple.300")}
    bg="#011627"
    rounded="3px"
    paddingLeft="2"
    paddingRight="2"
    {...props}
  />
)
