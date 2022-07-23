import { Box, Button, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Card659 = ({head,txt,imglink}) => {
  return (
    <Flex justifyContent="space-evenly" mt="60px" alignItems="center" >
      <Flex direction="column" align="flex-start" gap="40px" width="40%">
          <Heading fontWeight="extrabold" align="start">
           {head}
          </Heading>
          <Text align="start">
           {txt}
          </Text>
          <Button bgColor="blue.300" padding="30px">
           Create your Start Page for free
          </Button>
      </Flex>
      <Image src={imglink} width="41%" >
      </Image>
    </Flex>
  )
}

export default Card659