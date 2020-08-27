import React, {useState} from 'react';

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH,  } from '../../shared/util/validators'
import {useForm} from '../../shared/hooks/form-hook'
import './Auth.css'

const Auth = () => {
    const [isLogin, setIsLogin] = useState()
     const [formState, InputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

const switchModeHandler =() => {

}

const authSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs)
}

    return (
      <Card className="authentication">
          <h2>Login Required</h2>
          <hr />
          <form onSubmit={authSubmitHandler}>
              <Input 
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address"
              onInput={InputHandler}
              />
               <Input 
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 6 characters"
              onInput={InputHandler}
              />
              <Button type="submit" disabled={!formState.isValid} >Login</Button>
          </form>
          <Button inverse onClick={switchModeHandler}>Move to Signup</Button>
          </Card>
    );
};

export default Auth;