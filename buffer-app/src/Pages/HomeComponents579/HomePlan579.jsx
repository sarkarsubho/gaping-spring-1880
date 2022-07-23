import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
   
  } from '@chakra-ui/react';

  
  export default function HomePlan579() {
    return (
      <Stack minH={'500px'} direction={{ base: 'column', md: 'row' }}>
         <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'} textAlign="left">
          <Heading as='h4' size='md'>
              <Text
                as={'span'}
                position={'relative'}
                color="blue"
                > 2. APLAN AND PUBLISH YOUR CONTENT
              </Text>
              
            </Heading>
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
              Collaborate and plan your campaigns
              </Text>
              
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Schedule your posts in advance so you can focus on other things.
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
              <Button fontSize="18px" rounded={'5px'} colorScheme="blue" variant={"outline"}>Learn more</Button>
            </Stack>
          </Stack>
        </Flex>
       
      </Stack>
    );
  }