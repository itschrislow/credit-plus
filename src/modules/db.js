const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://KyleGnoel:OmIJfmVQjvnk4MKy@Cluster0.9irue.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('crediplusDB');
    const collections = await database.collections();

    console.log('connected to databse ' + database.databaseName )
    collections.forEach(c => console.log(c.collectionName))
    // const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);
    const profiles = database.collection("profile")
    // const insertCursor = await profiles.insertMany([
    //   {
    //     "name": "company1",
    //     "SSM": 1512,
    //     "balance": 5000,
    //     "income": 10,
    //     "CTOS": 0,
    //     "CCRIS": 0
    //   },
    //   {
    //     "name": "company2",
    //     "SSM": 1321,
    //     "balance": 2000,
    //     "income": 100,
    //     "CTOS": 0,
    //     "CCRIS": 0
    //   }
    // ])

    // console.log(insertCursor.insertedCount)

    const searchCursor = await profiles.find()
    const result = await searchCursor.toArray();
    console.table(result)
    // console.log(movie);
  } catch(ex) {
    console.error(ex)
  }finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

