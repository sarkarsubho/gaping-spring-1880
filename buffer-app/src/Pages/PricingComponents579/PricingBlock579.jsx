import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Pricetag.module.css"

const PricingBlock579 = () => {
  return (
    <div>
      <Flex justifyContent={"center"} mt={"2rem"}>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} className={styles.shado}>
          <Heading as="h2" size="md">
            Free
          </Heading>
          <Text>
          $0 per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} className={styles.shado}>
          <Heading as="h2" size="md">
          Essentials
          </Heading>
          <Text>
          $5/mo per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} className={styles.shado}>
          <Heading as="h2" size="md">
          Team
          </Heading>
          <Text>
          $10/mo per channel
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"30px"} className={styles.shado}> 
          <Heading as="h2" size="md">
          Agency
          </Heading>
          <Text>
          $100/mo for 10 channels
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default PricingBlock579;
