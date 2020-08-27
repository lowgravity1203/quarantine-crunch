import React, {useState, useContext} from 'react';

import Modal from '../../shared/components/UIElements/Modal'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import {AuthContext} from '../../shared/context/auth-context'
import './WorkoutItem.css'

const WorkoutItem = props => {
    const auth = useContext(AuthContext)

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    }

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false)
        console.log('DELETING...')
    }

    return (
        <React.Fragment>
            <Modal 
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Are you sure?" 
            footerClass='place-item__modal-actions' 
            footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler} >Cancel</Button>
                    <Button danger onClick={confirmDeleteHandler} >Delete</Button>
                </React.Fragment>
            } >
                <p>Do you want to proceed and delete this workout? Please note that it can't be undone.</p>
            </Modal>
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
             {auth.isLoggedIn && (<Button to={`/workouts/${props.id}`}>Edit</Button>)}
            {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler} >Delete</Button>)}
         </div>
         </Card>
     </li>
     </React.Fragment>
    );
};

export default WorkoutItem;