import { Center, Flex, Image, Text, Heading } from "@chakra-ui/react";
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
        </Heading><br></br>
        <Text maxW={"500px"}>
          People spend, on average, almost 2.5 hours on social media every
          day.​Let them find your brand more easily through these four simple
          steps:
        </Text>
        </Flex>
       
      </Center>
       <Image src={bufferloopv2} ></Image>
      
      


      <HomeAnaLize></HomeAnaLize>
      <HomePlan579></HomePlan579>
      <HomeEngage579></HomeEngage579>
      <HomeCelbCarosel></HomeCelbCarosel>
      <HomeHelpCenter579></HomeHelpCenter579>
      

      <Footer></Footer>
    </div>
  );
};
