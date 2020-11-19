const path = require('path')
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const debug = require("debug")("facade-with-db");
import IGameUser from '../interfaces/GameUser';
import { bryptAsync, bryptCheckAsync } from "../utils/bcrypt-async-helper"
import * as mongo from "mongodb"
import setup from "../config/setupDB"
import { ApiError } from "../errors/apiError"
import { use } from 'chai';


let userCollection: mongo.Collection;

export default class UserFacade {
    
    static async setDatabase(client: mongo.MongoClient){
        const dbName = process.env.DB_NAME;
        
        if(!dbName){throw new Error('DB-name not provided')};

        try {
            if(!client.isConnected()){await client.connect()};
            userCollection = client.db(dbName).collection("users");
            await userCollection.createIndex({userName: 1}, {unique: true})
            debug(`userCollection initialized: '${dbName}'`)
            return client.db(dbName);
        
        } catch (err){console.error("Could not create connect", err)}

      }
    
    static async addUser(user: IGameUser): Promise<string> {
        const hash = await bryptAsync(user.password);
        let newUser = { ...user, password: hash }
        const result = await userCollection.insertOne(newUser);
        return "User was added";
    }


    static async deleteUser(userName: string): Promise<string> {
        const del_user = await userCollection.findOneAndDelete({userName});
        if(del_user.value === null) throw new ApiError('not succeeded in deleting user');
        return "user was succesfully deleted"
      }

    static async getAllUsers(): Promise<Array<any>> {
        let users = await userCollection.find({},
            { projection: { _id: 0, name: 1, userName: 1 } }
        ).toArray();
        return users;
    }

    static async getUser(userName: string, proj?: object): Promise<any> {
        const user = await userCollection.findOne({ userName }, proj);
        if (!user) throw new ApiError("User not found", 400);
        return user;
    }

    static async checkUser(userName: string, password: string): Promise<boolean> {
        let userPassword = "";
        try {
            const user = await UserFacade.getUser(userName);
            userPassword = user.password;
        } catch (err) { }

        const status = await bryptCheckAsync(password, userPassword);
        return status
    }
}


async function test() {
    console.log("testing")
    const client = await setup();
    await UserFacade.setDatabase(client)
    await userCollection.deleteMany({})
    await UserFacade.addUser({ name: "kim", userName: "kim@b.dk", password: "secret", role: "user" })
    await UserFacade.addUser({ name: "ole", userName: "ole@b.dk", password: "secret", role: "user" })
   
    //testing get all users
    const all = await UserFacade.getAllUsers();
    console.log(all);

    //client.close();

    //testing getUser
    const projection = {projection:{_id:0, role:0,password:0}}
    const kim = await UserFacade.getUser("kim@b.dk",projection)
    debug(kim)

    //testing checkUser
    try{
        const userStatus = await UserFacade.checkUser('kim@b.dk','secret')
        debug("Password should be true..", userStatus);

    }catch (err){debug('error occurred', err)}


    //testing delete user
    await UserFacade.deleteUser('kim@b.dk');
    let remainingUsers = await UserFacade.getAllUsers();
    debug('one deleted means one left..', remainingUsers)

}

//test();