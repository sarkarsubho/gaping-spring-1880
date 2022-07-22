import {
    Flex,
    Box,
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
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
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
      </Flex>
    );
  }