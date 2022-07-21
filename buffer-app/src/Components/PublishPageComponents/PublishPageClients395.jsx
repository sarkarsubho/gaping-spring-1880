import React from 'react'
import { Box,Center,Flex,Image } from '@chakra-ui/react'
import shopify from "../data/shopify.png"
import client from "../data/client-image-logos.PNG"
const PublishPageClients395 = () => {
  return (
    <Flex>
        <Box alignItems={"center"} margin={'auto'} justifyContent={'center'}>
            <Center>
                <img src={client} filter="grayscale" alt='shopify'/>
            </Center>
        </Box>
    </Flex>
  )
}

export default PublishPageClients395