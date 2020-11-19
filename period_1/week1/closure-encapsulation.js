//task 2 without es6 

var personInfo = function(){
   
   var name;
   var age;
   
   function getInfo(){
    return `${this.name}, ${this.age}`;  
   };
   
    function setName(name){
        this.name = name;
    };

    function setAge(age){
        this.age = age;
    };
    
    return {
    getInfo: getInfo,
    setName: setName,
    setAge: setAge    
    };
};

var person = personInfo()
person.setAge(50);
person.setName("peter");

//console.log(person.getInfo());


//task 3 with es6

class PersonInfo {
    name;
    age;


    set name(name){
         this.name = name;
     }

     set age(age){
        this.age = age;
    }


    get info(){
        return `${this.name}, ${this.age}`;
    }

}


var personInfo1 = new PersonInfo();
personInfo1.name = 'Hej';
personInfo1.age = 89;
console.log(personInfo1.info);