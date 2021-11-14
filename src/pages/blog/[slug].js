import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  VStack,
  Spacer,
  chakra
} from '@chakra-ui/react'
import {getMDXComponent} from 'mdx-bundler/client'
import React from 'react'
import { Footer } from '../../components/Footer'
import {useMemo} from 'react';
import Header from '../../components/header';
import SEO from '../../components/seo';

import {getAllPosts, getSinglePost } from '../../mdx'

import {MDXComponents} from '../../components/mdx-components/mdx-components'

const Blog = ({ code, frontmatter }) => {
  const BlogComponent = useMemo(() => getMDXComponent(code), [code])
  return(
    <>
      <SEO title={frontmatter.title} description={frontmatter.description}/>
      <Header />
      <Box as='main' w='full' maxW='5xl' mx='auto'>
        <Box display={{ md: 'flex' }}>
          <Box flex='1' minW='0'>
            <Box id='content' px={5} mx='auto' minH='76vh'>
              <Flex>
                <Box
                      minW='0'
                      flex='auto'
                      px={{ base: '4', sm: '6', xl: '8' }}
                      pt='10'
                    >
                    <VStack>
                      <Heading p={5} tabIndex={-1} outline={0}>
                        {frontmatter.title}
                      </Heading>
                      <Divider />
                      <Flex p={5} w="100%">
                        <Text  color="gray.500">
                          {frontmatter.author}
                        </Text>
                        <Spacer />
                        <Text  color="gray.500">
                          {frontmatter.publishedOn}
                        </Text>
                      </Flex>
                    </VStack>
                    {frontmatter.headings}
                    <BlogComponent components={MDXComponents}/>
                    <Divider paddingTop={6} />
                    <Footer />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Blog