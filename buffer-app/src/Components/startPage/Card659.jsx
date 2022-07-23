import { Box, Button, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Card659 = ({head,txt,imglink}) => {
  return (
    <Flex
      justifyContent="space-evenly"
      mt="60px"
      alignItems="center"
      direction={["column", "column", "row", "row"]}
    >
      <Flex
        direction="column"
        align={["center", "center", "start", "start"]}
        gap="40px"
        width={["90%", "90%", "40%", "40%"]}
      >
        <Heading
          fontWeight="extrabold"
          align={["center", "center", "start", "start"]}
        >
          {head}
        </Heading>
        <Text align={["center", "center", "start", "start"]}>{txt}</Text>
        <Button bgColor="blue.300" padding="30px">
          Create your Start Page for free
        </Button>
      </Flex>
      <Image src={imglink} width={["100%", "100%", "41%", "41%"]}></Image>
    </Flex>
  );
}

export default Card659