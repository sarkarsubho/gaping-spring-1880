import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Pricetag.module.css"
import { Tablecomponent } from "./Tablecomponent";
import {data} from "../../data/Tabledata579"

const PricingBlock579 = () => {
  console.log(data);
  return (
    <div>
      <Flex justifyContent={"center"} mt={"2rem"}className={styles.shado} gap="23px" maxW={"100%"} align="center" margin={"30px auto"} display={["view","view","none","none"]}>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} borderRight={"1px solid gray"}>
          <Heading as="h2" size="md" margin={"-1"}>
            Free
          </Heading>
          <Text>
          $0 per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} borderRight={"1px solid gray"}>
          <Heading as="h2" size="md">
          Essentials
          </Heading>
          <Text>
          $5/mo per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} borderRight={"1px solid #A5C9CA"}>
          <Heading as="h2" size="md">
          Team
          </Heading>
          <Text>
          $10/mo per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"}> 
          <Heading as="h2" size="md">
          Agency
          </Heading>
          <Text>
          $100/mo for 10 channels
          </Text>
        </Box>
      </Flex>

      {
        data.map((tab,index)=>{return <Tablecomponent key={index} data={tab} index={index}></Tablecomponent>})
      }
      
    </div>
  );
};

export default PricingBlock579;
