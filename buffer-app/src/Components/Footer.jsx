import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return <div>
    <Box>
        <Text fontWeight={"extrabold"} fontSize={"[40,20,30]"} fontFamily="Roboto,sans-serif" w={"45%"}>140,000+ people like  you use Buffer to build their brand on social media every month </Text>
        {/* <Text>build their brand on social media</Text>
        <Text>every month</Text> */}
    </Box>
    <Button colorScheme="pink">Get started now</Button>

  </div>;
};
