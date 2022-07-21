import { Box, Flex,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Comment659 = () => {
  return (
    <Flex
      mt="13rem"
      justify="space-around"
      align={["center","center","start","start"]}
      direction={["column", "column", "row", "row"]}
      padding={["10px","10px","0px","0px"]}
    >
      <Image
        width={["100%", "100%", "30%", "30%"]}
        height="400px"
        src="https://buffer.com/static/testimonials/brylanna-nicole@2x.jpg"
      ></Image>
      <Box width={["100%", "100%", "40%", "40%"]}>
        <Image
          width="8%"
          src="https://anydesk.com/_static/img/icons/quote-2af3f2.svg"
        ></Image>
        <Heading align={["center","center","start","start"]} mt="30px">
          Compared to what we were using before, the notifications are more
          accurate and it’s so much easier to interact and comment back.
        </Heading>
        <Image
          mt="60px"
          width="20%"
          src="https://buffer.com/static/logos/logo-southern-elegance.png"
        ></Image>
        <Flex>
          <Text fontWeight="bold">BRYANNA-NICOLE EVANS, </Text>
          <Text>Social Media Manager</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Comment659