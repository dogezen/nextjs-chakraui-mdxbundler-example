import * as Chakra from "@chakra-ui/react"
import {Pre} from './pre'
import { LinkedHeading } from "./linked-heading"
import CodeBlock from "./codeblock/codeblock"
import {InlineCode} from "./inline-code"
import { Anchor } from "./anchor"

export const MDXComponents = {
  ...Chakra,
  h1: (props) => <Chakra.Heading  {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  hr: (props) => <Chakra.chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Chakra.Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
  p: (props) => <Chakra.chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <Chakra.chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <Chakra.chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <Chakra.chakra.li pb="4px" {...props} />,
  a: Anchor,
}