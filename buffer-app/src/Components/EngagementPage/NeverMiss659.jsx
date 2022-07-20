import { Box, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const NeverMiss659 = () => {
  return (
    <Flex mt="18rem" justify="space-evenly" alignItems="center" width="100%">
      <Flex width="30%" textAlign="start" direction="column" gap="30px">
        <Heading size="lg" width="40%" fontWeight="extrabold">Never miss a comment</Heading>
        <Text width="550px">
          The familiar grid view allows you to see which posts have unanswered
          comments and quickly jump from post to post.
        </Text>
      </Flex>
      <Image width="40%" src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/screenshots/engage-comments@2x.jpg"></Image>
    </Flex>
  );
}

export default NeverMiss659