import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./Router/router";

const MyApp = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default MyApp;