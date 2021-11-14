import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Text,
  useColorModeValue,
  Spacer,
  Link,
} from "@chakra-ui/react";


export const BlogCard = (props) => {
  var tags = []
  if(props.frontmatter.tags) {
    tags = props.frontmatter.tags.split(",").map((tag) => {
      return tag.trim()
    });
  }
  return (
    <Flex
      p={[2, 10]}
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "#222b39")}
        maxW="2xl"
        w="100%"
      >
        <Flex >
        {/*<Flex justifyContent="space-between" alignItems="center">*/}
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {props.frontmatter.category}
          </chakra.span>
          <Spacer />
          {tags.map((tag) => {
            return <chakra.span
                      bg="#888EC5"
                      color="#08081A"
                      mx = {1}
                      px={2}
                      py={0}
                      rounded={3}
                      textTransform="uppercase"
                      fontSize="xs"
                    >
                      {tag}
                    </chakra.span>
          })}
          {/* 
          
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            {props.frontmatter.tags}
          </Link>
          
          */}
        </Flex>
        
        <Box mt={6}>
          <Link
            href={"blog/" + props.slug}
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            lineHeight="1.3"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {props.frontmatter.title}
          </Link>
          <chakra.p 
            mt={5}
            lineHeight="1.3"
            color={useColorModeValue("gray.600", "gray.300")}>
            {props.frontmatter.description}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={8}>
          <Link
            href={"blog/" + props.slug}
            color={useColorModeValue("blue.500", "blue.300")}
            _hover={{ color: useColorModeValue("blue.400", "blue.200") }}
            textDecoration="underline solid 2px"
            textUnderlineOffset= "3px"      
          >
            Read more
          </Link>

          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {props.frontmatter.publishedOn}
          </chakra.span>
        </Flex>
      </Box>
    </Flex>
  );
};

