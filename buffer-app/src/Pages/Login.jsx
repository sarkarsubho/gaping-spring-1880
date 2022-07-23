import {
    Flex,
    Box,
    Image,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import abc from "./Images/image2.png"
import abcd from "./Images/image3.png"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';
  
import {Link as RouterLink, useNavigate} from "react-router-dom"
import { login } from '../Redux/AuthReducer/action';
  export default function Login() {
   const [username,setUsername]= useState("");
   const [password,setPassword]= useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const isLoading = useSelector((state) => state.AuthReduser.isLoading);

   const LoginHandler = ()=>{
     if(username && password){
      const params={
        username,password
      }
      dispatch(login(params)).then(res=>{
        if(res===LOGIN_SUCCESS){
            navigate("/",{replace:true})
        }
        else{
          <h1>Page not found</h1>
        }
      })
     }
   }

    return (
      <Flex
      maxH={'100vh'}
      minW={'200vh'}
      align={'left'}
      justify={'left'}>
         <Image src={abc} alt="" marginLeft={'-10px'} marginTop={'20px'} maxH={'7vh'} maxW={"200vh"}
            objectFit='cover'/>
        <Stack spacing={1} mx={'auto'} marginLeft={"-8rem"} maxW={'lg'} py={12} px={6}>
          <Stack align={'left'}>
            <Heading marginTop={'40px'} fontSize={'3xl'} textAlign={'left'}>Login</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            p={8}>
            <Stack spacing={2} marginLeft={"-30px"}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={LoginHandler}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account? <RouterLink to="/signup" color={'blue.400'}>Signup</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Image src={abcd} alt="" marginLeft={'50px'} maxH={'100vh'} maxW={"200vh"}
        objectFit='cover'/>
      </Flex>
    );
  }