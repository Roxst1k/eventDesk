import React from 'react';
import style from "../EventsList/style.module.css";
import css from './event.module.css'
import {NavLink} from "react-router-dom";



const Event = ({title, description,id,setShowConfirmation, setEventId}) => {
    const handleDeleteEvent = (id) => {
        setShowConfirmation(true)
        setEventId(id)

    }

    return (
        <li>
            <div className={css.event_header}>
                <h3>{title}</h3>
                <button
                    className={css.closeBtn}
                    onClick={() => handleDeleteEvent(id)}
                >
                    X
                </button>
            </div>
            <p>{description}</p>
            <div className={style.wrapper}>
                <NavLink to={`/registration/${id}`}>Register</NavLink>
                <NavLink to={`/participants/${id}`}>View</NavLink>
            </div>
        </li>
    );
};

export default Event;