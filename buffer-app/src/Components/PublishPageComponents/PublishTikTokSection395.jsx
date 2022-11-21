import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import tiktok from '../data/publish-instragram-stories.jpg'
const PublishTikTokSection395 = () => {
  return (
    <Flex flexDirection={["column","column","row"]} margin={"auto"} justifyContent={'center'} alignItems={"center"}>
        <Box>
            <Heading as='h2' noOfLines={[5,4,3]}> 
                Plan and prepare your TikToks <br /> and Stories
            </Heading>
            <Text fontSize={"24px"}>
            Plan and set reminders for your Stories and TikTok videos. You <br /> will receive a mobile notification when it{`’`}s time to share.
            </Text>
        </Box>
        <Box>
            <Image src={tiktok}/>    
        </Box>  
    </Flex>
  )
}

export default PublishTikTokSection395