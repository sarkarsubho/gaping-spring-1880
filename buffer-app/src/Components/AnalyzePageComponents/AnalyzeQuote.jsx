import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import image1 from '../data/luis-cancel-huckberry-v2.png'
import image2 from '../data/huckberry.PNG'
const AnalyzeQuote = () => {
  return (
    <Flex margin={"auto"} justifyContent={"center"} alignItems={"center"} gap={"20"}>
        <Box w={"400px"} height={"342px"}>
            <Image src={image1}/>
        </Box>
        <Box>
            <Heading as={"h1"} fontSize={"52px"}>
                {`"`} <br /> Buffer has made sharing our story <br /> and building our brand on social <br /> media so much easier.
            </Heading>
            <Image src={image2}/>
            <p><b>LUIS CANCEL</b>, Managing Editor</p>
        </Box>
    </Flex>
  )
}

export default AnalyzeQuote