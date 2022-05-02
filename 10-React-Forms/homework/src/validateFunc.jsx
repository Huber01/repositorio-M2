import React from "react";


const [input, setInput] = React.useState({
  username: '',
  password: '',
});
const [errors, setErrors] = React.useState({})

const handleInputChange = function (e){
  setInput ({
    ...input,
    [e.target.name]: e.target.value
  });
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
}

export default function  validate() {
    let errors ={};
      if (!input.username){
        errors.username = 'Username is required';
      } else if(!/\S+@\S+\.\S+/.test(input.username)){
        errors.username = 'Username is invalid';
      }
      if (!input.password) {
        errors.password = 'Password is required';
      } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Password is invalid';
      } 
  return errors;
  }