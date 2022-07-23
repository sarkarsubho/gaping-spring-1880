import { Box, Flex, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

const ThreeCards659 = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      mt="80px"
      direction={["column", "column", "row", "row"]}
      align={["center", "center", "start", "start"]}
    >
      <Flex direction="column" gap="20px" width={["90%", "90%", "25%", "25%"]}>
        <Image
          height="350px"
          width="350px"
          src="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/sections/combine-1.png"
        ></Image>
        <Heading size="md" align="start" fontWeight="bold">
          Combine all your links into one URL for free
        </Heading>
        <Text align="start">
          Highlight your most important links, articles, photos, videos,
          products, music, website. Grow your following across every platform by
          linking them all in one place.
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap="20px"
        width={["90%", "90%", "25%", "25%"]}
        mt={["70px", "70px", "0px", "0px"]}
      >
        <Image
          height="350px"
          width="350px"
          src="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/sections/track-1.png"
        ></Image>
        <Heading size="md" align="start">
          Track your link clicks and gain insights
        </Heading>
        <Text align="start">
          See how many views your link in bio page has received and understand
          the performance of each link.
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap="20px"
        width={["90%", "90%", "25%", "25%"]}
        mt={["70px", "70px", "0px", "0px"]}
      >
        <Image
          height="350px"
          width="350px"
          src="https://static.buffer.com/cdn-cgi/image/w=3840,quality=90,format=auto/marketing/static/start-page/sections/share-1.png"
        ></Image>
        <Heading size="md" align="start">
          Get your unique link and share it everywhere
        </Heading>
        <Text align="start">
          Share your Start Page wherever your audience is: Instagram, YouTube,
          TikTok, WhatsApp, in messengers, via SMS – wherever you’re online.
        </Text>
      </Flex>
    </Flex>
  );
}

export default ThreeCards659