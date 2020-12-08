import {HttpException} from "@restjs/core";

export interface UserInterface {
    id? : number;
    name? : string;
    last_name? : string;
    email? : string;
}

export default class UserService{
    users : UserInterface[] = [];

    createUser(userData : UserInterface) : UserInterface{
        /// Check if the email exists, then throw a HttpException
        const findExisting = this.users.find( user => user.email == userData.email);
        if(findExisting){
            throw new HttpException("This email address is already registered, please try another one.", 409);
        }

        /// Creating an user with incremental id.
        userData.id = this.users.length + 1;
        this.users.push(userData);
        return userData;
    }

    /**
     * REST-JS supports async/await and promises.
     * You can use async methods and promises to handle asynchronous requests .
     * For example, when your program will fetch the data from the database, you have to use async functions or promises.
     * In this example we just set a timeout function to simulate the async code function.
     * This function returns the data after 2 seconds (2000 milliseconds) .
     */
    getAll() : Promise<UserInterface[]>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                if(this.users.length == 0){
                    /// If you want to throw an exception into a promise, you have to use the `reject` function.
                    reject(
                        new HttpException("No user found.", 404)
                    );
                }
                resolve(this.users);
            },2000);
        })
    }

    findOne(id : number) : UserInterface{
        const user = this.users.find(user=>(user.id == id));
        if(!user){
            /// If no user found
            throw new HttpException(`No user found with id : ${id}`, 404);
        }

        /// If the user found
        return user;
    }
}
