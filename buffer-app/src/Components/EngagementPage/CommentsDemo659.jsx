import { Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const CommentsDemo659 = () => {
  return (
    <Flex
      bgColor="yellow.300"
      mt="100px"
      direction="column"
      alignItems="center"
      height="700px"
    >
      <Heading size="lg" mt="6rem" fontWeight="extrabold">
        Reply to comments from your desktop
      </Heading>
      <Text
        width={["100%", "100%", "30%", "30%"]}
        mt="2rem"
        padding={["10px", "10px", "0px", "0px"]}
      >
        View your unanswered comments in one simple dashboard. Buffer will
        highlight the most important ones for you.
      </Text>
      <Image
        width={["100%", "100%", "80%", "80%"]}
        src="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/screenshots/engagement-dashboard@2x.png"
      ></Image>
    </Flex>
  );
}

export default CommentsDemo659