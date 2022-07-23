import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomeEngage579() {
  return (
    <Stack minH={"500px"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"} textAlign="left">
          <Heading as="h4" size="md">
            <Text as={"span"} position={"relative"} color="blue">
              {" "}
              3. ENGAGE
            </Text>
          </Heading>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              // _after={{
              //   content: "''",
              //   width: 'full',
              //   height: useBreakpointValue({ base: '20%', md: '30%' }),
              //   position: 'absolute',
              //   bottom: 1,
              //   left: 0,
              //   bg: 'blue.400',
              //   zIndex: -1,
              // }}
            >
              Respond to comments twice as fast
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Skip to important comments with the help of labels and hotkeys.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link to="/signup">
              <Button
                rounded={"5px"}
                bg={"#2C4BFF"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                fontSize="18px"
              >
                Get started now
              </Button>
            </Link>
            <Link to="/engagepage">
              <Button
                fontSize="18px"
                rounded={"5px"}
                colorScheme="blue"
                variant={"outline"}
              >
                Learn More
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://buffer.com/static/illustrations/hero-reply@2x-2.webp"}
        />
      </Flex>
    </Stack>
  );
}
