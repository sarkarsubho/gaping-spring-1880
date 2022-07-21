import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { BsPlayCircle} from "react-icons/bs";
  
  export default function HomeIntro579() {
    return (
      <Stack minH={'500px'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
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
                Grow your audience on social and beyond
              </Text>
              
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Buffer helps you build an audience organically. We're a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'5px'}
                bg={'#2C4BFF'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} fontSize="18px">
                Get started now
              </Button>
              <Button fontSize="18px" leftIcon={<BsPlayCircle fontSize="25px"></BsPlayCircle>} rounded={'5px'} colorScheme="blue" variant={"outline"}>Watch video</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://buffer.com/static/illustrations/social-icons-hero.webp'
            }
          />
        </Flex>
      </Stack>
    );
  }