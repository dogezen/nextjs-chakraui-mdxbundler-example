import * as React from "react"
import { chakra } from "@chakra-ui/react"

export const Anchor = React.forwardRef((props, ref) => (
  <chakra.a ref={ref} apply="mdx.a" {...props} />
))
