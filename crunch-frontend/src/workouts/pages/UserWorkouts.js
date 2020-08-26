import React from 'react';
import {useParams} from 'react-router-dom'


import WorkoutList from '../components/WorkoutList';


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

const UserWorkouts = () => {
    const userId = useParams().userId
    const loadedWorkouts = DUMMY_PLACES.filter(workout => workout.creator === userId )
    return (
        <WorkoutList items={loadedWorkouts} />
    );
};

export default UserWorkouts;