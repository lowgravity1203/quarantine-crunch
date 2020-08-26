import React from 'react';
import {useParams} from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './WorkoutForm.css'

const DUMMY_PLACES = [
    {
        id: 'w1',
        title: 'squat',
        description: 'workout for your lower body',
        imageUrl: "https://www.pexels.com/photo/photo-of-man-lifting-barbell-1552106/",
        creator: 'u1'
    },
    
    {
        id: 'w2',
        title: 'squat',
        description: 'workout for your lower body',
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Squats.svg/1200px-Squats.svg.png",
        creator: 'u2'
    }
]

const UpdateWorkout = () => {
   const workoutId = useParams().workoutId

   
   const [formState, inputHandler] = useForm({
       title: {
           value: '',
           isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, true
    )

    const identifiedWorkout = DUMMY_PLACES.find(w => w.id === workoutId)
   
   const placeUpdateSubmitHandler = event => {
       event.preventDefault()
       console.log(formState.inputs)
   }
   
    if(!identifiedWorkout) {
        return <div className="center"><h2>Could not find workout!</h2></div>
    }

   return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
            id="title" 
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText = "Please enter valid title"
            onInput ={inputHandler }
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />
              <Input 
            id="description" 
            element="textarea" 
            label="Description" 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText = "Please enter valid description (min. 5 characters)"
            onInput ={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>Update Workout</Button>
        </form>
    );
};

export default UpdateWorkout;