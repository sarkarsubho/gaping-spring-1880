import { Button, Flex, Heading,Text,Image,Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Melisa659 = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-evenly"
      bgColor="rgb(239, 242, 255);"
      padding="80px"
      mt="60px"
      direction={["column","column","row","row"]}
    >
      <Image
        width={["100%","100%","43%","43%"]}
        src="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/sections/customize-1.png"
      ></Image>
      <Flex width={["100%","100%","50%","50%"]} alignItems={["center","center","start","start"]} direction="column" gap="30px">
        <Heading align="start">Don't settle for sameness</Heading>
        <Text align="start">
          Flexibility and customization options to create a beautiful page, no
          matter what type of business you have. Start from a pre-made template
          or create from scratch, make your page pop with powerful customization
          options.
        </Text>
        <Link to="/signup">
        <Button bgColor="blue.400" color="white" padding="30px">
          Create your Start Page for free
        </Button></Link>
      </Flex>
    </Flex>
  );
}

export default Melisa659