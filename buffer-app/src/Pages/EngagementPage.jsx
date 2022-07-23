import { Center, Container } from '@chakra-ui/react'
import React from 'react'
import BlueBox659 from '../Components/EngagementPage/BlueBox659'
import Comment659 from '../Components/EngagementPage/Comment659'
import CommentsDemo659 from '../Components/EngagementPage/CommentsDemo659'
import Convo659 from '../Components/EngagementPage/Convo659'
import Intro659 from '../Components/EngagementPage/Intro659'
import Keyboard659 from '../Components/EngagementPage/Keyboard659'
import NeverMiss659 from '../Components/EngagementPage/NeverMiss659'
import HomeCelbCarosel from '../Components/startPage/HomeCelbCarosel'


const EngagementPage = () => {
  return (
    <Container maxW="full" padding="0px">
      <Intro659 />
      <CommentsDemo659 />
      <NeverMiss659 />
      <Comment659 />
      <Convo659 />
      <Keyboard659 />
      <HomeCelbCarosel />
      <Center>
        <BlueBox659 />
      </Center>
    </Container>
  );
}

export default EngagementPage