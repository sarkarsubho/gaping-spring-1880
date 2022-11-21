import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import instagram from "../data/buffer-publish-instagram@2x.jpeg"
import {AiOutlineArrowRight} from 'react-icons/ai'
const PublishInstaSection395 = () => {
  return (     
    <Box margin={"40px"}>
        <Flex justifyContent={"space-between"}>
            <Box>
                <Flex flexDirection={"column"} gap={"40px"}>
                    <Heading fontSize={"22px"} color={"#2c4bfe"} fontWeight={"700px"}>
                        <Flex> <Box w={"80px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'black'}></Box>INSTAGRAM</Flex>
                    </Heading>
                    <Box>
                        <Heading as={'h1'} fontWeight="bold" mt={"30px"} fontSize={"38px"} fontStyle={'normal'}>   Take your Instagram marketing <br /> to the next level</Heading>
                    </Box>
                    <Heading fontSize={["16px","20px","24px"]} mt={"20px"} fontWeight={'light'}>
                        Build your brand on Instagram. Work together with your team to plan, preview, and schedule your upcoming <br /> Instagram posts, carousels, and campaigns.
                    </Heading>
                   <Flex alignItems={'center'}><Link className='link' lineHeight={"40.28px"} color={"blue"} fontSize={"21px"}>Learn More</Link><AiOutlineArrowRight color='blue'/></Flex>
                </Flex>
            </Box>
            <Box w={"50%"}>
                <img src={instagram} alt="instagram" />
            </Box>
        </Flex>
    </Box> 
  )
}

export default PublishInstaSection395