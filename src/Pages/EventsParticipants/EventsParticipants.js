import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {MyContext} from "../../App";

const EventsParticipants = () => {
    const {data, setData} = useContext(MyContext)
    const {eventId} = useParams()
    console.log(eventId)
    console.log(data)

    return (
        <div>

        </div>
    );
};

export default EventsParticipants;