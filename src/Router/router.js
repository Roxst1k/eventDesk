import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import EventsFormRegistration from "../Pages/EventsFormRegistration/EventsFormRegistration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventsParticipants from "../Pages/EventsParticipants/EventsParticipants";
;



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,

    },
    {
        element: <EventsFormRegistration/>,
        path: '/registration/:eventId',

    },
    {
        element: <EventsParticipants/>,
        path: '/participants/:eventId',
    }
])
