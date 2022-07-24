import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import s1 from '../data/s1.png'
import s2 from '../data/s2.png'
import s3 from '../data/s3.png'
const AnalyzeStats = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' margin={'40px'} gap={"20"} textAlign={"left"}>
    <GridItem>
    
     <h3> <b> Best time to post </b></h3> <br />
     <p>See the times that will earn your  <br /> Instagram posts the highest reach</p> <br />
     <img src={s1} alt="scheduling" />
    </GridItem>
    <GridItem>
    
      <h3><b>Best type of posts</b></h3> <br />
      <p>Find out whether videos, pictures, text, <br /> or link posts perform best for you</p> <br />
      <img src={s2} alt="tailored" />
    </GridItem>
    <GridItem>
    
    <h3><b>Best posting frequency</b></h3> <br />
    <p>Determine how often you should be <br /> posting to drive the most engagement </p> <br />
    <img src={s3} alt="calendar" />
    </GridItem>
   
  </Grid>
  )
}

export default AnalyzeStats