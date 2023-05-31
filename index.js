const connectToMongoDB = require('./app');

const main = async () => {
    let result = await connectToMongoDB();
    result = await result.find().toArray();
    console.log(result);
 }
 

 main();