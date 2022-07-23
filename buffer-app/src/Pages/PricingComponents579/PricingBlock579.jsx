import { Box, Flex, Heading, Show, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Pricetag.module.css";
import { Tablecomponent } from "./Tablecomponent";
import { data } from "../../data/Tabledata579";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

const PricingBlock579 = () => {
  const [type, setType] = useState("free");
  const handletype = (val) => {
    setType(val);
  };
  console.log(type);
  return (
    <div>
      <Show breakpoint='(max-width: 700px)' >
        <Tabs isFitted mt="80px" mb={"80px"}>
          <TabList h={"100px"}>
            <Tab
              className={styles.shado}
              _selected={{ color: "white", bg: "#1F35B3" }}
              onClick={() => handletype("free")}
            >
              <Flex direction={"column"}>
                <Heading as="h4" size="lg" fontWeight={"bold"}>
                  Free
                </Heading>
                <Text fontSize={"10px"}>$0 per channel</Text>
              </Flex>
            </Tab>
            <Tab
              className={styles.shado}
              _selected={{ color: "white", bg: "#1F35B3" }}
              onClick={() => handletype("essentials")}
            >
              <Flex direction={"column"}>
                <Heading as="h4" size="lg" fontWeight={"bold"}>
                  Essentials
                </Heading>
                <Text fontSize={"10px"}>$5/mo per channel</Text>
              </Flex>
            </Tab>
            <Tab
              className={styles.shado}
              _selected={{ color: "white", bg: "#1F35B3" }}
              onClick={() => handletype("team")}
            >
              <Flex direction={"column"}>
                <Heading as="h4" size="lg" fontWeight={"bold"}>
                  Team
                </Heading>
                <Text fontSize={"10px"}>$10/mo per channel</Text>
              </Flex>
            </Tab>
            <Tab
              className={styles.shado}
              _selected={{ color: "white", bg: "#1F35B3" }}
              onClick={() => handletype("agency")}
            >
              <Flex direction={"column"}>
                <Heading as="h4" size="lg" fontWeight={"bold"}>
                  Agency
                </Heading>
                <Text fontSize={"10px"}>$100/mo for 10 channels</Text>
              </Flex>
            </Tab>
          </TabList>
        </Tabs>
      </Show>

      {data.map((tab, index) => {
        return (
          <Tablecomponent key={index} data={tab} index={index}></Tablecomponent>
        );
      })}
    </div>
  );
};

export default PricingBlock579;
