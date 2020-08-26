import React from 'react';

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import './WorkoutItem.css'

const WorkoutItem = props => {
    return (
     <li className="place-item">
         <Card className="place-item__content"> 
         <div className="place-item__image">
             <img src={props.img} alt={props.title} />
         </div>
         <div className="place-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
         </div>
         <div className="place-item__actions">
             <Button to={`/places/${props.id}`}>Edit</Button>
             <Button danger>Delete</Button>
         </div>
         </Card>
     </li>
    );
};

export default WorkoutItem;