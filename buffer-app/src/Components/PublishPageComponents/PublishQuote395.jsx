import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import image1 from '../data/luis-cancel-huckberry-v2.png'
import image2 from '../data/huckberry.PNG'
const PublishQuote395 = () => {
  return (
    <Flex margin={"auto"} flexDirection={["column","column","row"]} justifyContent={"center"} alignItems={"center"} gap={"20"}>
        <Box w={"400px"} height={"342px"}>
            <Image src={image1}/>
        </Box>
        <Box>
            <Heading as={"h1"} fontSize={["32px","44px","52px"]} noOfLines={[5,4,3]}>
                {`"`}Buffer has made sharing our story and building our brand on social media so much easier.{`"`}
            </Heading>
            <Image src={image2}/>
            <p><b>LUIS CANCEL</b>, Managing Editor</p>
        </Box>
    </Flex>
  )
}

export default PublishQuote395