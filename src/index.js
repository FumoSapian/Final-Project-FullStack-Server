const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const url =
  "mongodb+srv://FumoSapian:1putlbL42gV8Ao1I@finalproject.xcwgz32.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject";
const client = new MongoClient(url);
const coffee = [
{name: 'black', type: 'hot', season: 'winter'},
{name: 'sweet', type: 'hot', season: 'spring'},
{name: 'mocha', type: 'hot', season: 'spring'}
];

async function run() {
    try {
        await client.connect();
        database = client.db('CoffeList');
        coffeeList = database.collection('List of Coffee')
        result = await coffeeList.insertMany(coffee);
        console.log ("Coffee Inserted Successfully");
        console.log(result.insertedIds);
    } finally {
    await client.close();
    }
}


//async function run() {
  //try {
    //await client.connect();
    //const database = client.db('sample_mflix');
    //const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Pacific Rim' };
    //const movie = await movies.findOne(query);
    //console.log(movie);
 // } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
 // }
//}
run().catch(console.dir);