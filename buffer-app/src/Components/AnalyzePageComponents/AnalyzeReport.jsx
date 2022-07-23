import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import './analyzeReport.css'
import report from '../data/happy-donut-report@2x.png'
import b1 from "../data/b1.PNG"
import b2 from "../data/b2.PNG"
import b3 from "../data/b3.PNG"
import b4 from "../data/b4.PNG"
const AnalyzeReport = () => {
  return (
    <div style={{backgroundColor:"#202BFE"}}>
       <Flex  margin={"auto"} padding={"50px"} justifyContent={"space-between"} alignItems={"center"} gap={"15"}>
        <Box marginLeft={"80px"} h={"650px"} w={"750px"}>
            <Image src={report} h={"100%"} />
        </Box>
        <Box>
            <Flex flexDirection={"column"} gap={"40px"}>
                <Heading fontSize={"22px"}mt={"20px"} color={"#fff"} fontWeight={"700px"}>
                    <Flex> <Box w={"40px"} mt={"8px"} mr={"20px"} h={"2px"} bg={'white'}></Box>REPORT</Flex>
                </Heading>
                <Box>
                    <Heading as={'h1'} fontWeight="bold" mt={"30px"} color={"#F3AFB9"} fontSize={"38px"} fontStyle={'normal'}> Create and share <br />  beautiful reports</Heading>
                </Box>
                <Box>
                  <Heading fontSize={"24px"} mt={"20px"} color={'white'} noOfLines={3} fontWeight={'light'}>
                    Build fully customized reports, and easily export them — to share them with your team, manager, and stakeholders.
                  </Heading>
                </Box>
                <Grid templateColumns='repeat(2, 1fr)' gap={"10"}>
                    <GridItem>
                    <img src={b1} alt="drafts" />
                    <h3> <b> Draft posts </b></h3>
                    <p>Create drafts, get feedback, and refine  <br /> content as a team</p>
                    </GridItem>
                    <GridItem>
                    <img src={b2} alt="approvals" />
                    <h3><b>Approvals</b></h3>
                    <p>Review posts for quality and brand <br /> before hitting publish</p>

                    </GridItem>
                    <GridItem>
                    <img src={b3} alt="sync" />
                    <h3><b> Stay in sync</b> </h3>
                    <p>Everyone's posts will be shared within <br /> your preset schedule</p>

                    </GridItem>
                    <GridItem>
                    <img src={b4} alt="security" />
                    <h3> <b>Account management</b></h3>
                    <p>Easily share and manage access to <br /> each social account</p>

                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    </Flex>
    </div>
  )
}

export default AnalyzeReport