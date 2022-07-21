import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import { BsPlayCircle } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import intro from "../../data/Bufferintro.mp4";

export default function HomeIntro579() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack minH={"500px"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Grow your audience on social and beyond
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Buffer helps you build an audience organically. We're a
            values-driven company that provides affordable, intuitive, marketing
            tools for ambitious people and teams.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
            <Button
              fontSize="18px"
              leftIcon={<BsPlayCircle fontSize="25px"></BsPlayCircle>}
              rounded={"5px"}
              colorScheme="blue"
              variant={"outline"}
              onClick={onOpen}
            >
              Watch video
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://buffer.com/static/illustrations/social-icons-hero.webp"}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <br></br>
          <br></br>

          <ModalBody>
            {/* <Box h={"600px"} w={"700px"}>
                <video controls autoPlay height={"700px"} width={"900px"}>
                  <source src={intro} type="video/mp4" />
                </video>
              </Box> */}
            <AspectRatio ratio={10 / 6}>
              <video controls autoPlay height={"700"} width={"900"}>
                <source src={intro} type="video/mp4" />
              </video>
            </AspectRatio>
          </ModalBody>

          {/* <ModalHeader>Modal Title</ModalHeader> */}
        </ModalContent>
      </Modal>
    </Stack>
  );
}
