import React from 'react';
import style from './style.module.css'
import EventsList from "../../Components/EventsList/EventsList";


const EventsDesc = ({showModal}) => {
    return (
        <div className={style.container}>
            <div className={style.event_wrapper}>
                <h1 className={style.title}>Events</h1>
                <button type={"button"} className={style.button} onClick={() => showModal(true)}>Add event</button>
            </div>
            <EventsList/>
        </div>
    );
};

export default EventsDesc;