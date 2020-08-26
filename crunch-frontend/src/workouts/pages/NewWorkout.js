import React from 'react';

import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import {useForm} from '../../shared/hooks/form-hook'
import './WorkoutForm.css'



const NewWorkout = () => {
     const [formState, inputHandler] = useForm (
         {
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)
 

   

const placeSubmithandler = event => {
    event.preventDefault()
    console.log(formState.inputs)// send this to the backend
}

    return (
       <form className="place-form" onSubmit={placeSubmithandler}>
           <Input 
           id="title"
           element="input" 
           type="text" 
           label="Title" 
           validators={[VALIDATOR_REQUIRE()]} 
           errorText="please enter a valid title"
           onInput={inputHandler}
           />
         <Input 
           id="description" 
           element="textarea" 
           label="Description" 
           validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
           errorText="please enter a valid description (at least 5 characters) "
           onInput={inputHandler}
           />
           <Button type="submit" disabled={!formState.isValid}>Add Workout</Button>
       </form>
    );
};

export default NewWorkout;