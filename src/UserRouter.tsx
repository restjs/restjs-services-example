import React from "react";
import {Router, Get, Post} from '@restjs/core';
import UserController from "./controllers/UserController";
import UserService from "./services/UserService";
import ParseIdPipe from "./pipes/ParseIdPipe";
import CreateUserDto from "./dto/CreateUserDto";

export default (
    <Router path="/user"
            controller={UserController}
            services={[UserService]}
            pipes={[ParseIdPipe]}
    >
        <Post
            path="/register"
            handle="register"
            validate={{
                body : CreateUserDto,
                whitelist : true,
                forbidNonWhitelisted : true
            }}
        />

        <Get
            path="/all"
            handle="allUsers"
        />

        <Get
            path="/:id"
            handle="findUser"
        />

        {
            /**
             * In some nested routers, REST-JS always shares just one instance of every service, not different service instances.
             **/
        }
        <Router path="/api" controller={UserController}>
            <Get
                path="/all"
                handle="allUsers"
            />
        </Router>
    </Router>
)
