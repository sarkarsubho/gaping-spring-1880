import React from 'react'
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import instagram from "../data/buffer-publish-instagram@2x.jpeg"

const AnalyzeMeasure = () => {
  return (
    <Box margin={"40px"}>
    <Flex justifyContent={"space-between"}>
        <Box>
            <Flex flexDirection={"column"} gap={"40px"}>
                <Heading fontSize={"22px"} color={"#2c4bfe"} fontWeight={"700px"}>
                    <Flex> <Box w={"50px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'black'}></Box>MEASURE</Flex>
                </Heading>
                <Box>
                    <Heading as={'h1'} fontWeight="bold" mt={"30px"} noOfLines={2} fontSize={"38px"} fontStyle={'normal'}>Measure {`&`} analyze the performance of your content</Heading>
                </Box>
                <Heading fontSize={"24px"} mt={"20px"}fontWeight={'light'} noOfLines={3}>
                Get a broad understanding of your performance across multiple accounts, and in-depth insights into specific social channels.
                </Heading>
            </Flex>
        </Box>
        <Box w={"50%"}>
            <img src={instagram} alt="instagram" />
        </Box>
    </Flex>
</Box> 
  )
}

export default AnalyzeMeasure