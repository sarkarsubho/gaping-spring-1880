import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import colab from "../data/buffer-publish-collaboration@2x.jpg"
import account from "../data/accountsecurity.PNG"
import approval from "../data/approval.PNG"
import draftlogo from "../data/draftlogo.PNG"
import synclogo from "../data/sync.PNG"

const PublishColab395 = () => {
  return (
    <Flex  margin={"auto"} justifyContent={"center"} alignItems={"center"} gap={"15"}>
        <Box>
            <Image src={colab}/>
        </Box>
        <Box>
            <Flex flexDirection={"column"} gap={"40px"}>
                <Heading fontSize={"22px"} color={"#2c4bfe"} fontWeight={"700px"}>
                    <Flex> <Box w={"80px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'black'}></Box>COLLABORATION</Flex>
                </Heading>
                <Box>
                    <Heading as={'h1'} fontWeight="bold" mt={"30px"} fontSize={"38px"} fontStyle={'normal'}> Collaborate on content <br /> with your team</Heading>
                </Box>
                <Heading fontSize={"24px"} mt={"20px"}fontWeight={'light'}>
                Work together with your team to create <br /> content that's high quality, on-brand, and that <br />your audience is going to love.
                </Heading>
                <Grid templateColumns='repeat(2, 1fr)' gap={"10"}>
                    <GridItem>
                    <img src={draftlogo} alt="drafts" />
                    <h3> <b> Draft posts </b></h3>
                    <p>Create drafts, get feedback, and refine  <br /> content as a team</p>
                    </GridItem>
                    <GridItem>
                    <img src={approval} alt="approvals" />
                    <h3><b>Approvals</b></h3>
                    <p>Review posts for quality and brand <br /> before hitting publish</p>

                    </GridItem>
                    <GridItem>
                    <img src={synclogo} alt="sync" />
                    <h3><b> Stay in sync</b> </h3>
                    <p>Everyone's posts will be shared within <br /> your preset schedule</p>

                    </GridItem>
                    <GridItem>
                    <img src={account} alt="security" />
                    <h3> <b>Account management</b></h3>
                    <p>Easily share and manage access to <br /> each social account</p>

                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    </Flex>
    
  )
}

export default PublishColab395