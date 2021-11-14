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
import React from 'react'
import { Footer } from '../components/Footer'
import {BlogCard} from '../components/BlogCard'
import Header from '../components/header'
import SEO from '../components/seo'

import {getAllPosts } from '../mdx'

export default function Blog({posts}) {
  return(
    <>
      <SEO title="Explorations" description="Exploring how to take action towards developing skills and growing as a person in various aspects of your life."/>
      <Header />
      <Box as='main' w='full' maxW='5xl' mx='auto'>
        <Box display={{ base: 'flex' }}>
          <Box flex='1' minW='0'>
            <Box py={[0, 6]} id='content' px={[0, 5]} mx='auto' minH='76vh'>
              <Flex>
                <Box
                      minW='0'
                      flex='auto'
                      px={{ base: '4', sm: '6', xl: '8' }}
                      pt='10'
                    >
                    <Flex justifyContent="center" alignItems="center">
                      <Heading>Experiential Learning</Heading>
                    </Flex>
                    <Text my={[4, 6]} color="gray.300" align="justify" lineHeight="1.3">
                        Experiential Learning is all about growing as a person through experiences. I publish articles on topics that I find interesting, in particular to encourage others to take action towards developing skills and growing as a person in various aspects of their lives. 
                    </Text>
                    {posts.map((post) => {
                      return <BlogCard key={post.frontmatter.title} {...post} />
                    })}

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
export function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}