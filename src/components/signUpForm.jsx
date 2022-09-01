
import React from 'react';
import {
  Input,
  FormHelperText,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Spinner
} from '@chakra-ui/react';

import { AuthContext } from '../context/AuthContext';

const SignUpForm = () => {
  const [show, setShow] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleAuth } = React.useContext(AuthContext);
  const [signUpData, setSignUpData] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = signUpData;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  }

  if(isLoading){
    return  <center>

     <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    />
    </center>
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'Application/json',
      },
    })
      .then(res => res.json())
      .then((res) => { res.token == undefined
        ? toggleAuth(false)
        : toggleAuth(res.token) 
    })
    .finally(()=>setIsLoading(false))
    
  };
  const isError = email === '';

  return (
<>
    <FormControl w={'50%'} m={'auto'} isInvalid={isError}>
     
      <br />
      <br />
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <br />
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <br />
      <br />
      <center>
        <Button
          //   isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </center>
    </FormControl>
      <Button m={30} onClick={()=>toggleAuth(false)} colorScheme='red'> Log out </Button>
    </>
  );
};

export default SignUpForm;