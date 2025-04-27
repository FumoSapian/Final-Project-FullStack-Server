const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const url =
  "mongodb+srv://FumoSapian:1putlbL42gV8Ao1I@finalproject.xcwgz32.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject";
const client = new MongoClient(url);
const coffee = [
];

//user input to add into the database

async function addToDataBase(){
  const prompt = require('prompt-sync')();
  const userData = prompt ("Please enter the name of the coffee you would like to addToDataBase : ");
  const userTemp = prompt ("Please enter the tempurate of the coffee that best suits for it :");
  const userSeason = prompt ("Please enter tje season of the coffee that best suits for it : ");
  const addMore = prompt ("Would you like to add more to the database ? type yes to add more. : ");
  const ListEntry = ('[{name: ' + userData + ',  type: ' + userTemp + ', season: ' + userSeason + '}]');
  result = await coffeeList.insertMany(ListEntry);
  console.log(result.insertedIds);
  console.log ("Coffee Inserted Successfully");
  
  if (addMore == 'yes')
  {
    addToDataBase();
  }
}

//base function of the database
async function run() {
    try {
        database = client.db('CoffeeList');
        coffeeList = database.collection('List of Coffee')
        await client.connect();
        addToDataBase();
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