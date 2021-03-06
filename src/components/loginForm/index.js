import React, { useState, useContext } from "react";
import { StoreContext } from "../../providers/store";
import "./index.css";
import { FlashContext } from '../../providers/Flash';
import  { useHistory } from 'react-router-dom'

const LoginForm = ({ handleCardFlip }) => {
  const [state, actions] = useContext(StoreContext);
  const [logInDetails, setLogInDetails] = useState({
    email: "",
    password: "",
  });
  const {createFlashMessage} = useContext(FlashContext);
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogInDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const status = await actions.signIn(logInDetails);
    if (status >= 400) {
      createFlashMessage({
        type: 'error',
        message: 'Invalid username or password.'
      })
    } else if (status >= 200) {
      createFlashMessage({
        type: 'success',
        message: 'Successfully logged in.' //`Successfully logged in. Welcome ${state.user.name}!` - would like but state not updating in time
      })
      history.push('/')
    }
  };

  return (
    <div className="loginForm">
      <h2 className="loginTitle" data-testid="loginTitle">
        Login
      </h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          className="form-input"
          id="loginEmail"
          name="email"
          placeholder="Email"
          data-testid="loginEmail"
          value={logInDetails.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          className="form-input"
          id="loginPassword"
          name="password"
          placeholder="Password"
          value={logInDetails.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="submit"
          className="formButton"
          id="loginButton"
          value="Log In"
          data-testid="loginButton"
        />
      </form>
      <p>
        Don't have an account?{" "}
        <span
          className="signUpLink"
          data-testid="signUpLink"
          onClick={handleCardFlip}
        >
          Sign Up!
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
