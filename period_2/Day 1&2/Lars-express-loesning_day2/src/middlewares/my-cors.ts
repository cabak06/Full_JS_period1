/*
c) In the middlewares folder create a new file, my-cors.ts
and add and export a middleware function that can add required CORS-headers. 
*/

function myCors(req:any,res:any,next:any){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    next();
};

export default myCors;




