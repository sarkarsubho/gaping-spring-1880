import { Box, Button, Container, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const StartPageIntro659 = () => {
  return (
    
      <Flex
        width={["90%", "90%", "45%", "45%"]}
        alignItems="center"
        gap="40px"
        direction="column"
      >
        <Heading size="xl" fontWeight="extrabold" letterSpacing={["0px","0px","1px","2px"]}>
          The link in bio that drives more traffic to your content for free
        </Heading>
        <Text>
          Start Page is a simple, beautiful, flexible link in bio page that
          brings together all of your best content in one place. Share it in
          your bios on Instagram, YouTube, TikTok, or any other social profiles.
        </Text>
        <Link to="/signup">
        <Button
          bgColor="blue.400"
          padding="40px"
          color="white"
          
        >
          Create your Start Page for free
        </Button>
        </Link>
      </Flex>
    
  );
}

export default StartPageIntro659