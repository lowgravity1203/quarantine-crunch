import React from 'react';

import UserItem from './UserItem'
import './UsersLists.css'

const UserLists = props => {
    if (props.items.length === 0) {
        return <div className="center">
            <h2>No users found</h2>
        </div>
    }
    return <ul className="users-list">
        {props.items.map(user => (
            <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image} 
            name={user.name} 
            workoutCount={user.workouts} 
            />
        ))}
    </ul>
};

export default UserLists;