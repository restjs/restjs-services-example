import {Inject} from "@restjs/core";
import UserService from "../services/UserService";

export default class UserController{
    /**
     * We use @Inject() decorator to inject an instance of the UserService class into our controller.
     * Please refer https://www.typescriptlang.org/docs/handbook/decorators.html to get more information about decorators.
     */
    @Inject()
    userService : UserService;

    register(req){
        /// The body object of req is validated by CreateUserDto
        return this.userService.createUser(req.body);
    }

    allUsers(){
        return this.userService.getAll();
    }

    findUser(req){
        return this.userService.findOne(req.params.id);
    }
}
