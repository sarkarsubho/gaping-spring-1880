import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import planning from "../data/buffer-publish-planning@2x.jpg"
const PublishPlanningSection = () => {
  return (
    <Box margin={"40px"} justifyContent={"center"} alignItems={"center"}>
    <Flex justifyContent={"space-between"} flexDirection={["column",'column','row']}>
        <Box>
            <Flex flexDirection={"column"} gap={"40px"}>
                <Heading fontSize={"18px"} color={"#2c4bfe"} fontWeight={"700px"}>
                    <Flex> <Box w={"80px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'black'}></Box>PLANNING</Flex>
                </Heading>
                <Box>
                    <Heading as={'h1'} fontWeight="bold" mt={"30px"} fontSize={"38px"} fontStyle={'normal'}>  Plan out the perfect posting <br /> schedule</Heading>
                </Box>
                <Heading fontSize={"24px"} mt={"20px"}fontWeight={'light'}>
                Queue up content on an automated schedule or choose a <br /> custom time for each post. You're in total command of what <br /> you share and when.
                </Heading>
               
            </Flex>
        </Box>
        <Box w={"50%"}>
            <img src={planning} alt="instagram" />
        </Box>
    </Flex>
</Box> 
  )
}

export default PublishPlanningSection