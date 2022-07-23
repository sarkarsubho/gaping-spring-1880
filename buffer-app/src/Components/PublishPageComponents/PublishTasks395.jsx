import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import calendar from '../data/buffer-publish-calendar@2x.jpg';
import scheduling from '../data/buffer-publish-scheduling@2x.jpg';
import tailored from '../data/buffer-publish-tailored-posts-v2@2x.jpg';
const PublishTasks395 = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' margin={'40px'} gap={"20"}>
    <GridItem>
      <img src={scheduling} alt="scheduling" />
     <h3> <b> Scheduling </b></h3>
     <p>Create a preset publishing schedule  <br /> for each social account</p>
    </GridItem>
    <GridItem>
    <img src={tailored} alt="tailored" />
    <h3><b>Tailored posts</b></h3>
     <p>Custom tailor your posts for each <br /> social network</p>

    </GridItem>
    <GridItem>
    <img src={calendar} alt="calendar" />
    <h3><b>Calendar</b></h3>
    <p>Get an at-a-glance view of all the <br /> content you have lined up </p>

    </GridItem>
   
  </Grid>
    
  )
}

export default PublishTasks395