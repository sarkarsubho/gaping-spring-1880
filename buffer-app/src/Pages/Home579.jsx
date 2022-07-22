import { Center, Flex, Image, Text, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Components/Footer";
import HomeAnaLize from "./HomeComponents579/HomeAnaLize";
import HomeCelbCarosel from "./HomeComponents579/HomeCelb-Carosel";
import HomeEngage579 from "./HomeComponents579/HomeEngage579";
import HomeHelpCenter579 from "./HomeComponents579/HomeHelpCenter579";
import HomeIntro579 from "./HomeComponents579/HomeIntro579";
import HomePlan579 from "./HomeComponents579/HomePlan579";
import brand1 from "../data/brand1.png";
import brand2 from "../data/brand2.png";
import bufferloopv2 from "../data/buffer-loop-v2.svg";
import Meta from "../data/Meta.png";
import MarketingPartner from "../data/MarketingPartner.png";
import Partners from "../data/Partners.png";
import BlueBox659 from "../Components/BlueBox659";

export const Home579 = () => {
  return (
    <div>
      {/* <Box>
          <Text
            fontWeight={"extrabold"}
            fontSize={"[40,20,30]"}
            fontFamily="Roboto,sans-serif"
            w={"45%"}
          >
            140,000+ people like you use Buffer to build their brand on social
            media every month{" "}
          </Text>
       <Text>build their brand on social media</Text>
        <Text>every month</Text> 
        </Box>
        <Button colorScheme="pink">Get started now</Button> */}

      <HomeIntro579></HomeIntro579>
      <Flex direction={["column", "column", "column", "row"]}>
        <Image src={brand1} alt="Dan Abramov"></Image>
        <Image src={brand2} alt="Dan Abramov"></Image>
      </Flex>
      <Center>
        <Flex direction={"column"}>
          <Heading as="h2" size="xl">
            Be where your customers are
          </Heading>
          <br></br>
          <Text maxW={"500px"}>
            People spend, on average, almost 2.5 hours on social media every
            day.​Let them find your brand more easily through these four simple
            steps:
          </Text>
        </Flex>
      </Center>
      <Image src={bufferloopv2}></Image>

      <HomeAnaLize></HomeAnaLize>
      <HomePlan579></HomePlan579>
      <HomeEngage579></HomeEngage579>
      <Flex justifyContent={"center"} direction={"column"} mt={"30px"} >
        <Heading as="h4" size="md" color={"blue"}>
          4. CELEBRATE
        </Heading>
        <Heading as="h4" size="2xl">
          Businesses all over the world trust Buffer to build their brand
        </Heading>
      </Flex>
      <HomeCelbCarosel></HomeCelbCarosel>
      <Flex direction={["column","column","row","row"]}gap={"2rem"} justifyContent={"center"}>
        <Flex direction={"column"} >
          <Heading as="h4" size="xl" color={"blue"}>
            10 years
          </Heading>
          <Text>in business</Text>
        </Flex>
        <Flex direction={"column"}>
          <Heading as="h4" size="xl" color={"blue"}>
            140,000
          </Heading>
          <Text>users</Text>
        </Flex>
        <Flex direction={"column"}>
          {" "}
          <Heading as="h4" size="xl" color={"blue"}>
            100k+
          </Heading>
          <Text>monthly blog readers</Text>
        </Flex>
        <Flex direction={"column"} mb={"20px"}>
          <Heading as="h4" size="xl" color={"blue"}>
            1.2M+
          </Heading>
          <Text>social followers</Text>
        </Flex>
      </Flex>
      <Divider></Divider>
      <HomeHelpCenter579></HomeHelpCenter579>
      <Center mt={"2rem"}>
      <Heading as='h4' size='md' >
      An official marketing partner of the industry leaders
      </Heading>
      
      </Center>
      <Flex direction={["column","column","row","row"]} alignItems="center" justifyContent={"center"} gap={"3rem"} mt={"2rem"}>
        <Image src={Meta}></Image>
        <Image src={Partners}></Image>
        <Image src={MarketingPartner}></Image>
      </Flex>
      <BlueBox659></BlueBox659>

      <Footer></Footer>
    </div>
  );
};
