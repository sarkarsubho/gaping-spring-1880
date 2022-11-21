import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import delivery from "../data/deliverylogo.png";
import commentlogo from "../data/commentlogo.png";
import reminderlogo from "../data/reminderloggo.PNG";
import cartlogo from "../data/cartlogo.PNG";

const PublishIconsSection395 = () => {
  return (
    <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} margin={'40px'} gap={"10px"}>
      <GridItem>
        <img src={delivery} alt="delivery" />
       <h3> <b> Direct scheduling </b></h3>
       <p>Autopublish your posts, carousels, and <br /> Reels directly to Instagram</p>
      </GridItem>
      <GridItem>
      <img src={commentlogo} alt="comment" />
      <h3><b>First comment</b></h3>
       <p>Include a first comment when you <br /> schedule Instagram posts</p>

      </GridItem>
      <GridItem>
      <img src={cartlogo} alt="cart" />
      <h3><b> Shop grid</b> </h3>
       <p>Drive traffic and sales to your shop <br /> from your Instagram bio</p>

      </GridItem>
      <GridItem>
      <img src={reminderlogo} alt="reminder" />
      <h3> <b>Reminders</b></h3>
       <p>Plan posts in advance and get <br /> notifications to post natively</p>

      </GridItem>
    </Grid>
    
  )
}

export default PublishIconsSection395