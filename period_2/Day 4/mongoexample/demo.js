const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:cb061279@fullstackjs.nqebb.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function mongoTest(){

    try{
       await client.connect();
       const dogs = client.db("kennel")
       const dogsCollection = dogs.collection("dogs")
       //await dogsCollection.insertMany([{name:'Togo'},{name:'Fido'},{name:'Tut'},{name:'Dog'}])
       //await dogsCollection.insertOne({name:'Fido2'})
       const allDogs = await dogsCollection.find({}).toArray();
       const dog = await dogsCollection.findOne({name:'Fido'})
       //await dogsCollection.deleteMany({name:'Togo'},{name:'Fido'},{name:'Tut'},{name:'Dog'})
       //console.log(allDogs); 
       //console.log(dog) 
    } catch (err){
       console.log(err);
    }
    finally{
       client.close();
       console.log('Closed');
    }
}

mongoTest();