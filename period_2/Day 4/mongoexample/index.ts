import * as mongo from "mongodb";
const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://root:cb061279@fullstackjs.nqebb.mongodb.net/<dbname>?retryWrites=true&w=majority";


/* IMPORTANT ---> 
   Before you start, do a tcs --init in the root of the project to create tsconfig.json
*/

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function insertAndReadData() {
    try {
        
        await client.connect();
        const db = client.db("test")
        await db.collection('inventory').deleteMany({})
        const result = await db.collection('inventory').insertOne({
            item:"canvas",
            qty:100,
            tags:["cotton"],
            size:{h:28, w: 35.5, uom:"cm"}
        })
    //    console.log("count", result.insertedCount)
    //    console.log("id", result.insertedId)
    //    console.log("id", result.ops)
    
    //    var cursor = db.collection('inventory').find({})
    //    cursor.forEach((data)=>{if(data){console.log(data)}},(err)=>{if(err){console.log(err)}})
    //    console.log(cursor)

        var results = await db.collection('inventory').find({}).toArray();
        console.log(results);

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Connection Closed")
    }
}


async function connectSetupDataAndGetDB() {
    await client.connect();
    const db = client.db("test")
    await db.collection('inventory').deleteMany({});
    await db.collection('inventory').insertMany( [
        { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
        { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
        { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
        { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
        { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
     ]);
    return db; 
}

async function readDataWithQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').find({status: 'D'}).toArray();
        let result2 = await db.collection('inventory').find({size:{h:14,w:21,uom:'cm'}}).toArray();
        let result3 = await db.collection('inventory').find({'size.uom': 'in'}).toArray();
    //  console.log(result);
    //  console.log(result2)
        console.log(result3)
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOptions() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').find({},
            {
                projection:{item:1,qty:1,_id:0},
                limit:3,
                sort:{qty:-1}
            }).toArray()
        console.log(result)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOperatorsAndCompoundQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        //result finds values where size.h is less than 10
        let result = await db.collection('inventory').find({
            "size.h": {$lt:10}
        }).toArray();

        //result1 finds values where status is A AND qty less than 30
        let result1 = await db.collection('inventory').find({
            status: 'A',
            qty: {$lt:30}
        }).toArray()

        //result2 finds values where status is A OR qty is les than 30
        let result2 = await db.collection('inventory').find({
            $or: [ {status:'A'}, {qty:{$lt:30}} ]
        }).toArray()


    //  console.log(result)
    //  console.log(result1)
    console.log(result2)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
async function updateData() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection('inventory').findOneAndUpdate(
            { item:'paper'},
            { $set:{'size.uom':'cm', status: 'P'},
              $currentDate: {lastModified: true } },
            {returnOriginal:false})
        //console.log(result.value);
        
        let result2 = await db.collection('inventory').updateMany(
            { qty: {$lt:50} },
            { $set: {'size.uom':'in', status:'P'},
              $currentDate: {lastModified: true}  })
        //console.log(result2.modifiedCount)
              
        

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }

}
async function deleteData() {
    try {
        const db = await connectSetupDataAndGetDB();
        await db.collection('inventory').deleteOne({
           status: 'D' 
        })
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
//insertAndReadData();
//readDataWithQueries();
//readDataWithOptions()
//readDataWithOperatorsAndCompoundQueries();
//updateData()
//deleteData()