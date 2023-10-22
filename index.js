import express from "express";
import { connect } from "mongoose";
import userRoute from './routes/userRoute';
import dogRoute from './routes/dogrRoute';

const app = express();
const port = 8000;

connect(
    "mongodb+srv://prabanidevindya97:mvlo2qOyMm4T2ySp@canniecluster.lvjt9g5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Unable to connect to mpngoDB atlas");
    console.error(error);
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});





//app.use('/',userRoute);
//app.use(dogRoute);

app.use('/api', require('./routes'));

app.get('/', (req, res) => {
  res.send('Welcome to the Canine Connect!');
});

