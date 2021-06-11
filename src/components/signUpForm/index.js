import React, { useState } from 'react';
import './index.css';

const SignUpForm = ({ handleSignUpClick }) => {
  const [signUpDetails, setSignUpDetails] = useState({
    email : "",
    name : "",
    username : "",
    password : "",
    confirmPassword : ""
  })

  const handleChange = (event) => {
    const {id, value} = event.target
    setSignUpDetails(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    if(signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer()
    } else {
      console.log("Error: Passwords do not match") 
      // Add in flash message 
    }
  }

  const sendDetailsToServer = async () => {
    if(signUpDetails.email.length && signUpDetails.password.length) {
      // and error is null || success message present 
      const userDetails={
        "email":signUpDetails.email,
        "name":signUpDetails.name,
        "username":signUpDetails.username,
        "password":signUpDetails.password
      }
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userDetails)
      }).catch((error) => {
        // Server response error message
        console.log(error)
      })
      return response.json()
    }
  }  

  return (
    <div className='signUpForm'>
      <form onSubmit={handleSubmitClick}> 
        <input type="email" 
              className="form-input"
              id="signUpEmail" 
              placeholder="Enter email" 
              value={signUpDetails.email} 
              onChange={handleChange}
              required />
        <input type="text" 
              className="form-input"
              id="signUpName" 
              placeholder="Enter name" 
              value={signUpDetails.name} 
              onChange={handleChange}
              required />
        <input type="text"
              className="form-input" 
              id="signUpUsername" 
              placeholder="Enter Username" 
              value={signUpDetails.username} 
              onChange={handleChange} />
        <input type='password'
              className="form-input"
              id = 'signUpPassword'
              placeholder='Password'
              value={signUpDetails.password}
              onChange={handleChange}
              required />
        <input type='password'
              className="form-input"
              id = 'signUpConfirmPassword'
              placeholder='Confirm Password'
              value={signUpDetails.confirmPassword}
              onChange={handleChange}
              required />
        <input type='submit' value='Sign Up' />
      </form>
      <p>
        Already have an account? <a className='signUpLink' onClick={handleSignUpClick}>Log In!</a>
      </p>
    </div>
  )
}

//close button to delete this component

export default SignUpForm