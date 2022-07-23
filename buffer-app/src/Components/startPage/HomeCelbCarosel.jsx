import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import styles from "./Style.module.css";


export default function HomeCelbCarosel() {
  return (
    <Container
      maxWidth={["500px", "800px", "1000px", "1200px", "1500px", "1500px"]}
      mt="60px"
      padding="0"
    >
      <div className={styles.slider}>
        <div className={styles.slidertrack}>
          {/* box 1 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  On social, we need to be fast, efficient, and intentional.
                  Buffer allows us to be exactly that.
                </Text>

                <Heading as="h5" size="sm">
                  Liz Gillis, Digital Marketer
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 2 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/troy-petrunoff@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  For a marketing team with a lot on our plates, Buffer is a
                  crucial tool in our brand-building efforts.
                </Text>

                <Heading as="h5" size="sm">
                  Troy Petrunoff, Marketing Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 3 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/luis-cancel-huckberry-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer has made sharing our story and building our brand on
                  social media so much easier.
                </Text>

                <Heading as="h5" size="sm">
                  Luis Cancel, Managing Editor
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 4 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer makes it easy for us to monitor all of our engagement
                  and strengthen the connection with our audience.
                </Text>

                <Heading as="h5" size="sm">
                  Rodrigo Hyago, Social Media Content Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 5 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/joe-mercy-for-animals@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer saves us, literally, hours and in turn helps us spread
                  our message even further.
                </Text>

                <Heading as="h5" size="sm">
                  Joe Loria, Content Manager{" "}
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 1 */}

          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  On social, we need to be fast, efficient, and intentional.
                  Buffer allows us to be exactly that.
                </Text>

                <Heading as="h5" size="sm">
                  Liz Gillis, Digital Marketer
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 2 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/troy-petrunoff@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  For a marketing team with a lot on our plates, Buffer is a
                  crucial tool in our brand-building efforts.
                </Text>

                <Heading as="h5" size="sm">
                  Troy Petrunoff, Marketing Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 3 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/luis-cancel-huckberry-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer has made sharing our story and building our brand on
                  social media so much easier.
                </Text>

                <Heading as="h5" size="sm">
                  Luis Cancel, Managing Editor
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 4 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer makes it easy for us to monitor all of our engagement
                  and strengthen the connection with our audience.
                </Text>

                <Heading as="h5" size="sm">
                  Rodrigo Hyago, Social Media Content Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 5 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/joe-mercy-for-animals@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer saves us, literally, hours and in turn helps us spread
                  our message even further.
                </Text>

                <Heading as="h5" size="sm">
                  Joe Loria, Content Manager{" "}
                </Heading>
              </Stack>
            </Box>
          </Box>

          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  On social, we need to be fast, efficient, and intentional.
                  Buffer allows us to be exactly that.
                </Text>

                <Heading as="h5" size="sm">
                  Liz Gillis, Digital Marketer
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 2 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/troy-petrunoff@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  For a marketing team with a lot on our plates, Buffer is a
                  crucial tool in our brand-building efforts.
                </Text>

                <Heading as="h5" size="sm">
                  Troy Petrunoff, Marketing Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 3 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/luis-cancel-huckberry-mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer has made sharing our story and building our brand on
                  social media so much easier.
                </Text>

                <Heading as="h5" size="sm">
                  Luis Cancel, Managing Editor
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 4 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer makes it easy for us to monitor all of our engagement
                  and strengthen the connection with our audience.
                </Text>

                <Heading as="h5" size="sm">
                  Rodrigo Hyago, Social Media Content Manager
                </Heading>
              </Stack>
            </Box>
          </Box>

          {/* box 5 */}
          <Box
            maxW={"390px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            className={`${styles.caroselBoxShado} ${styles.slide}`}
            rounded={"md"}
          >
            <Flex justify={"center"} mt={0}>
              <Avatar
                size={"xl"}
                mt={-65}
                className={styles.caroselavetar}
                src={
                  "https://static.buffer.com/cdn-cgi/image/w=128,quality=90,format=auto/marketing/static/testimonials/joe-mercy-for-animals@mobile.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5} gap={"30px"}>
                <Text color={"gray.500"}>
                  Buffer saves us, literally, hours and in turn helps us spread
                  our message even further.
                </Text>

                <Heading as="h5" size="sm">
                  Joe Loria, Content Manager{" "}
                </Heading>
              </Stack>
            </Box>
          </Box>
        </div>
      </div>
    </Container>
  );
}
