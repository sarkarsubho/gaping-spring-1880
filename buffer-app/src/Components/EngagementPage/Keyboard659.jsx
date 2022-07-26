import React from 'react'
import { Flex,Heading,Text,Image } from '@chakra-ui/react';

const Keyboard659 = () => {
  return (
    <Flex
      mt="7rem"
      justify="space-evenly"
      alignItems="center"
      width="100%"
      direction={["column", "column", "row", "row"]}
      padding={["10px", "10px", "0px", "0px"]}
    >
      <Flex
        width={["100%","100%","30%","30%"]}
        textAlign={["center","center","start","start"]}
        direction="column"
        gap="30px"
      >
        <Heading size="lg" fontWeight="extrabold">
          It's all about speed
        </Heading>
        <Text width="90%">
          There's only so much time in the day for social media marketing.
          Keyboard hotkeys and smart emojis help you quickly interact with more
          fans, without having to pick up your phone.
        </Text>
      </Flex>
      <Image
        width={["100%", "100%", "35%", "35%"]}
        src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/screenshots/engange-hotkeys@2x-v2.jpg"
      ></Image>
    </Flex>
  );
}

export default Keyboard659