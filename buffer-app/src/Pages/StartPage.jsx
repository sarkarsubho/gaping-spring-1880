import { Center, Container } from '@chakra-ui/react'
import React from 'react'
import Accordionn659 from '../Components/startPage/Accordionn659'
import CardNav659 from '../Components/startPage/CardNav659'
import Melisa659 from '../Components/startPage/Melisa659'
import StartPageIntro659 from '../Components/startPage/StartPageIntro659'
import ThreeCards659 from '../Components/startPage/ThreeCards659'

const StartPage = () => {
  return (
    
      <Container maxW="100%" padding="0" margin="0">
      <Center >
      <StartPageIntro659 />
      </Center >
      <CardNav659 />
      <Melisa659 />
      <ThreeCards659 />
      <Center>
      <Accordionn659 />
      </Center>
     </Container>
    
  )
}

export default StartPage