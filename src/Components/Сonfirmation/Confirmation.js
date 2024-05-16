import React from 'react';
import style from './confirmation.module.css'


const Confirmation = ({setShowConfirmation, deleteEvent}) => {

    const closeConfirmation = () => {
        setShowConfirmation(false)
    }


    return (
        <>
            <div
                className={style.wrapper}
                onClick={closeConfirmation}
            ></div>
            <div className={style.content}>
                <h2>You delete event</h2>
                <h2>Are you sure?</h2>
                <div className={style.buttonWrapper}>
                    <button
                        className={style.buttonDelete}
                        onClick={deleteEvent}
                    >Yes</button>
                    <button
                        className={style.buttonDelete}
                        onClick={closeConfirmation}
                    >No</button>
                </div>
            </div>
        </>
    );
};

export default Confirmation;