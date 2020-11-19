//(userName below = email):
const bcrypt = require('bcryptjs')
const Joi = require('joi')
//var Joi = require('@hapi/joi');


interface IGameUser { name: string, userName: string, password: string, role: string }

const users: Array<IGameUser> = [
{
name:'PersonTest1',
userName:'person1@hotmail.com',
password:'123456',
role:'admin1'
},
{
name:'PersonTest2',
userName:'person2@hotmail.com',
password:'123456',
role:'admin2'
}
];


export class UserFacade {

  static addUser(user: IGameUser): boolean {
    const { error } = this.validateUser(user);
    //check if error
    if(error) throw new Error(error.details[0].message);
    //check if user already is in system:
    const user_Is = users.find(u => u.userName === user.userName);
    if(user_Is) throw new Error(` ERROR: username ${user.userName} already exixts.`);
    //hashing the password
    user.password = bcrypt.hashSync(user.password,10);
    //push user to array
    users.push(user);
    return true;
   }


  static deleteUser(userName: string): boolean { 
    const user = users.find(u => u.userName === userName);
    //check if user exist
    if(!user) throw new Error(` ERROR: username ${user} couldn't be found.`)
    //delete user
    const index = users.indexOf(user);
    users.splice(index,1);
    return true; 
    }


  static getAllUsers(): Array<IGameUser> { 
    //checking whether array is empty
    if(users.length < 1) throw new Error("Empty List");  
    return users;
    }


  static getUser(userName: string): IGameUser { 
    const user = users.find(u => u.userName === userName);  
    if(!user) throw new Error(` ERROR: user with username: ${user} couldn't be found.`);
    return user;
    }

  static checkUser(userName: string, password: string): boolean {
    //finding user
    const user = users.find(u => u.userName === userName);
    //check user and password
    if(!user || !bcrypt.compareSync(password, user.password)) throw new Error(` ERROR: user: ${user} or password: ${password} is wrong`);
    return true;
    }


  static validateUser(user:IGameUser){
    const schema = {
        name: Joi.string().min(3).required(),
        userName: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().min(2).required()
}
    return Joi.validate(user, schema);
}

}


