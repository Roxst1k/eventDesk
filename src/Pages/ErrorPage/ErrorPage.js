import React from 'react';
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            width: '100vw',
            height: '100vh'}}
        >
            <div>
                <h1>Ops!</h1>
                <p>Sorry, something went wrong</p>
                <p>{error.statusText ?? error.message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;