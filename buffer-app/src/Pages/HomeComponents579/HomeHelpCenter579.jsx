import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  
} from "@chakra-ui/react";


export default function HomeHelpCenter579() {
  return (
    <Stack minH={"500px"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
              And we are here to help
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
          Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"5px"}
            
              colorScheme={"blue"}
              // _hover={{
              //   bg: "blue.500",
              // }}
              fontSize="18px"
              variant={"outline"}
            >
             Visit our help center
            </Button>
          
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
