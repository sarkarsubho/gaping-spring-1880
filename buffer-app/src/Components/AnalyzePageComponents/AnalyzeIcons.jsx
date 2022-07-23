import React from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import a1 from '../data/a1.PNG'
import a2 from '../data/a2.PNG'
import a3 from '../data/a3.PNG'
import a4 from '../data/a4.PNG'



const AnalyzeIcons = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' margin={'40px'} gap={"10px"}>
      <GridItem>
        <Box>
          <img src={a1} alt="posts" />
          <h3> <b> Boosted post insights </b></h3> <br />
          <p>Compare paid vs organic results of<br /> boosted posts</p>
        </Box>
      </GridItem>
      <GridItem>
        <Box>
          <img src={a2} alt="comment" />
          <h3><b>Account analytics</b></h3> <br />
          <p>Track key engagement metrics for each <br />social account</p>
        </Box>
      </GridItem>
      <GridItem>
        <Box>
          <img src={a3} alt="cart" />
          <h3><b> Stories {`&`} post analytics</b> </h3> <br />
          <p>Measure stories, individual posts, and  <br /> hashtags</p>
        </Box>
      </GridItem>
      <GridItem>
        <Box>
          <img src={a4} alt="reminder" />
          <h3> <b>Audience demographics</b></h3> <br />
          <p>Know whether you're reaching the <br /> right audience</p>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default AnalyzeIcons