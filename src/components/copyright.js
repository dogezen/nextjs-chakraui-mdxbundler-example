import { Link, Text, chakra } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} All rights reserved. Built with <chakra.a href="https://nextjs.org/" apply="mdx.a">NextJS</chakra.a>, <chakra.a href="https://chakra-ui.com/" apply="mdx.a">Chakra UI</chakra.a> on <chakra.a href="https://vercel.com" apply="mdx.a">Vercel</chakra.a>
  </Text>
)