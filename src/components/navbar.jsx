import React from 'react';
import SignUpForm from './signUpForm';
import { AuthContext } from '../context/AuthContext';
import {
   Box,
   Button
  } from '@chakra-ui/react';
const Navbar = () => {
    const [showLogin, setShowLogin] = React.useState(false)
    const {isAuth} = React.useContext(AuthContext)
   
  return (
    <>
      <Box  bg={"yellow.200"} >
      <Button  onClick={()=>setShowLogin(!showLogin)} >Login</Button>
      
      </Box>
      <Box style={(isAuth ? {color:"green",backgroundColor:"lightgreen",padding:"10px"} : {color:"red",backgroundColor:"orange" ,padding:"10px"}) } >
    <center >
   
        <h2   > This User is  {isAuth? "Successfully" : "not"} Logged in.</h2>
      
        
    </center>
      </Box>
      <div>
        {
            (showLogin ? <SignUpForm/> : null)
        }
        
      </div>
    </>
  );
};

export default Navbar;