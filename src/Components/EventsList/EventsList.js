import React, {useContext, useState} from 'react';
import style from './style.module.css'
import Event from "../Event/Event";
import Confirmation from "../Сonfirmation/Confirmation";
import {MyContext} from "../../App";

const EventsList = () => {
    const {data, setData} = useContext(MyContext)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [eventId, setEventId] = useState('')


    const deleteEvent = () => {
        const newData = data.filter(item => (item.id !== eventId))
        setData(newData)
        setShowConfirmation(false)
    }

    return (
        <div className={style.container}>
            <ul>
                {data.map(item => (
                    <Event key={item.id}
                           title={item.title}
                           description={item.description}
                           id={item.id}
                           setShowConfirmation={setShowConfirmation}
                           setEventId={setEventId}
                    ></Event>
                ))}
            </ul>
            {showConfirmation &&
                <Confirmation
                    setShowConfirmation={setShowConfirmation}
                    deleteEvent={deleteEvent}
                />}
        </div>
    );
};

export default EventsList;


