import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://amanda:teste1234@cluster0.fxakm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotifyClone");

//const songColletion = await db.collection("songs").find({}).toArray();

//console.log(songColletion);
