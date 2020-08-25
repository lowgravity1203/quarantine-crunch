import React from 'react';


import UserLists from '../components/UsersList';

const Users = () => {
    const USERS = [{id: 'u1', 
    name: 'Matt', 
    image: "https://i.ytimg.com/vi/RlZqKwXlT-w/maxresdefault.jpg", 
    workouts: 3 
    }]

    return <UserLists items={USERS} />
    }

    


export default Users;