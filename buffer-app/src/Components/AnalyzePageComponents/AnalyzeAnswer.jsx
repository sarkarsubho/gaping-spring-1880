import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import answer from '../data/analyze-anwer@2x.png'
const AnalyzeAnswer = () => {
  return (
    <Box margin={"40px"} justifyContent={"center"} alignItems={"center"}>
    <Flex justifyContent={"space-between"}>
        <Box>
            <Flex flexDirection={"column"} gap={"40px"}>
                <Heading fontSize={"18px"} color={"#2c4bfe"} fontWeight={"700px"}>
                    <Flex> <Box w={"80px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'black'}></Box>ANSWER</Flex>
                </Heading>
                <Box>
                    <Heading as={'h1'} textAlign="left" fontWeight="bold" mt={"30px"} fontSize={"38px"} fontStyle={'normal'}>  Get answers to your biggest<br /> questions.</Heading>
                </Box>
                <Heading textAlign={"left"} fontSize={"24px"} mt={"20px"} fontWeight={'800px'}>
                Analyze studies your data and tells you when, what, and how<br /> often to post to maximize your results. For your Instagram <br />profiles, your best time to post is predicted using your followers' <br /> activity and your previous posts.
                </Heading>
               
            </Flex>
        </Box>
        <Box w={"50%"}>
            <img src={answer} alt="answer" />
        </Box>
    </Flex>
</Box>
  )
}

export default AnalyzeAnswer