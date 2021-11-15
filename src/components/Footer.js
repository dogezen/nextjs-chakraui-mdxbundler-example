import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './copyright'
import { Logo } from './Logo'
import { SocialMediaLinks } from './social-media-links'

export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="8" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction={{base: "column", sm: "row"}} spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)