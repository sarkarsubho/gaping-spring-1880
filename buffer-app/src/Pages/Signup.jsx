import {
    Flex,
    Box,
    Image,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    EditableTextarea,
    Container,
  } from '@chakra-ui/react';
  import { useReducer, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink, useNavigate} from "react-router-dom"
  import { Editable,EditablePreview } from '@chakra-ui/react';
import { register } from '../Redux/AuthReducer/action';
import {REGISTER_SUCCESS} from "../Redux/AuthReducer/actionTypes"
import { useDispatch } from 'react-redux';


  function reducer(state,action){
    switch(action.type){
        case "name":
            return{
                ...state,
                name:action.payload
            }
        case "email":
             return{
                  ...state,
                  email:action.payload
            }
            case "password":
              return{
                  ...state,
                  password:action.payload
              }
              case "username":
            return{
                ...state,
                username:action.payload
            }
            case "mobile":
            return{
                ...state,
                mobile:action.payload
            }
            case "description":
            return{
                ...state,
                description:action.payload
            }
            default:
              return state;
    }
  }


  const initialState = {
    name:"",
    email:"",
    password:"",
    username:"",
    mobile:0,
    description:""
  }
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [state,setter] = useReducer(reducer,initialState)
    const navigate = useNavigate();
    const dispattch = useDispatch();


    const SignupHandler = ()=>{
      dispattch(register(state)).then((r)=>{
        if(r===REGISTER_SUCCESS){
          navigate("/login",{replace:true})
        }
      })
    }
  
    return (
      <>
      <Flex
        border={"1px solid red"}
        minH={'100vh'}
        align={'left'}
        justify={'left'}
        >
        <Stack spacing={1} marginLeft={"7rem"} maxW={'lg'} py={12} px={6}>
          <Stack align={'left'}>
            <Heading fontSize={'3xl'} textAlign={'left'}>
              Let's get your account set up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            p={8}>
            <Stack spacing={2} marginLeft={"-30px"}>
              <HStack >
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={state.name} onChange={(e)=>setter({type:"name", payload:e.target.value})}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>username</FormLabel>
                    <Input type="text" value={state.username} onChange={(e)=>setter({type:"username", payload:e.target.value})}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={state.email} onChange={(e)=>setter({type:"email", payload:e.target.value})}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Create a Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={state.password} onChange={(e)=>setter({type:"password", payload:e.target.value})}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box>
                  <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input type="number" value={state.mobile} onChange={(e)=>setter({type:"mobile", payload:e.target.value})}/>
                  </FormControl>
                </Box>
              <Box>
                <Editable defaultValue="Description">
                    <EditablePreview/>
                    <EditableTextarea value={state.description} onChange={(e)=>setter({type:"description", payload:e.target.value})}/>
                </Editable>
              </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={SignupHandler}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouterLink to="/login" color={'blue.400'}>Login</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Image src='Buffersignupimage copy.png' alt="" boxSize='100px'
        objectFit='cover'/>
      </Flex>
      <Image src='/Pages/Images/Buffersignupimage.png' alt="" boxSize='100px'
        objectFit='cover'/>
      <img src="Images/Buffersignupimage.png" alt="" width={'100px'} height={'100px'}/>
      <Image src='/Images/Buffersignupimage.png' alt="" boxSize='100px'
        objectFit='cover'/>
      </>
      
    );
  }