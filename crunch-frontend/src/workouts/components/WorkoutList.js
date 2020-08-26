import React from 'react';


import Card from '../../shared/components/UIElements/Card'
import WorkoutItem from './WorkoutItem';
import Button from '../../shared/components/FormElements/Button'
import './WorkoutList.css'

const WorkoutList = props => {
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Workouts found. maybe create one?</h2>
                    <Button to="/workouts/new">Create Workout</Button>
                </Card>
            </div>
        );
    }
    return <ul className="place-list">
        {props.items.map(workout => (
        <WorkoutItem 
        key={workout.id} 
        id={workout.id} 
        image={workout.imageUrl} 
        title={workout.title} 
        description={workout.description} 
        creatorId={workout.creator} 
        /> 
        ))}
    </ul>
};

export default WorkoutList;