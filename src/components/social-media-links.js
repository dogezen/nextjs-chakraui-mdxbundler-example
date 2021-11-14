import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.500" {...props}>
    <IconButton color="gray.500" as="a" href="https://www.linkedin.com/in/carlomminciacchi/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton color="gray.500" as="a" href="https://github.com/dogezen" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    {/*
    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} /> */}
  </ButtonGroup>
)