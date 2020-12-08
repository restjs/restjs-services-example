import React from 'react';
import {Application} from '@restjs/core';
import UserRouter from "./UserRouter";

const app : React.ReactElement = (
    <Application
        onListen={()=>{
            console.log('Rest-JS app is running on : http://localhost:3000');
        }}
    >
        {UserRouter}
    </Application>
)

Application.run(app);
