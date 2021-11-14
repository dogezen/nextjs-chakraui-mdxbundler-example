import {
  chakra,
  Flex,
  Button,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { Logo } from './Logo';
import { SocialMediaLinks } from './social-media-links';


const HeaderContent = (props) => {
  const mobileNav = useDisclosure();
  const mobileNavBtnRef = React.useRef();
  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <>
      <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
        <Flex align='center'>
          <NextLink href='/' passHref>
            <chakra.a display='block' aria-label='Experiential Learning, Back to homepage'>
              <Logo display={{ base: 'none', md: 'block' }} />
            </chakra.a>
          </NextLink>
        </Flex>

        <Flex
          justify='flex-end'
          w='100%'
          align='center'
          color='gray.400'
          maxW='1100px'
        >
          {/*<Search />
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label='Open Menu'
            onClick={mobileNav.onOpen}
          />
          */}
          <Button
            as="a"
            bg="gray.800"
            color="gray.500"
            display="inline-flex"
            alignItems="center"
            href="/"
            fontSize="l"
            _hover={{ color: "blue.400" }}
            _focus={{ boxShadow: "none" }}
          >
            Blog
          </Button>  
          <SocialMediaLinks />        
        </Flex>
      </Flex>
      {/*
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />*/}
    </>
  );
  
}

const Header = (props) => {
  const ref = React.useRef();
  /*
  const [y, setY] = React.userState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  // requires framer-motion
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  */

  return (
    <chakra.header
      ref={ref}
      shadow='m'
      transition='box-shadow 0.2s, background-color 0.2s'
      pos='sticky'
      top='0'
      zIndex='3'
      bg='gray.800'
      left='0'
      right='0'
      width='full'
      {...props}
    >
      <chakra.div height='4.5rem' mx='auto' maxW='8xl'>
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
}

export default Header;