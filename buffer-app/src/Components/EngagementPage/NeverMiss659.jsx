import { Box, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const NeverMiss659 = () => {
  return (
    <Flex
      mt={["9rem", "9rem", "18rem", "18rem"]}
      justify="space-evenly"
      alignItems="center"
      width="100%"
      direction={["column", "column", "row", "row"]}
      padding={["10px", "10px", "0px", "0px"]}
    >
      <Flex
        width={["100%", "100%", "30%", "30%"]}
        textAlign={["center", "center", "start", "start"]}
        align={["center", "center", "start", "start"]}
        direction={["column", "column", "column", "column"]}
        gap="30px"
      >
        <Heading size="lg" width="40%" fontWeight="extrabold">
          Never miss a comment
        </Heading>
        <Text width={["100%", "100%", "550px", "550px"]}>
          The familiar grid view allows you to see which posts have unanswered
          comments and quickly jump from post to post.
        </Text>
      </Flex>
      <Image
        width={["100%", "100%", "40%", "40%"]}
        src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/screenshots/engage-comments@2x.jpg"
      ></Image>
    </Flex>
  );
}

export default NeverMiss659