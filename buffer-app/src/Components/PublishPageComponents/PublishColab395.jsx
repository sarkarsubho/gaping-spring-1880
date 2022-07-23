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
                <Grid templateColumns='repeat(2, 1fr)' gap={"10px"}>
                    <GridItem>
                    <img src={draftlogo} alt="drafts" />
                    <h3> <b> Direct scheduling </b></h3>
                    <p>Autopublish your posts, carousels, and <br /> Reels directly to Instagram</p>
                    </GridItem>
                    <GridItem>
                    <img src={approval} alt="approvals" />
                    <h3><b>First comment</b></h3>
                    <p>Include a first comment when you <br /> schedule Instagram posts</p>

                    </GridItem>
                    <GridItem>
                    <img src={synclogo} alt="sync" />
                    <h3><b> Shop grid</b> </h3>
                    <p>Drive traffic and sales to your shop <br /> from your Instagram bio</p>

                    </GridItem>
                    <GridItem>
                    <img src={account} alt="security" />
                    <h3> <b>Reminders</b></h3>
                    <p>Plan posts in advance and get <br /> notifications to post natively</p>

                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    </Flex>
    
  )
}

export default PublishColab395