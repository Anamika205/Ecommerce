const mongoose = require('mongoose');
const express = require('express'); 
const cors = require('cors');
const loginRoutes = require('./Routes/loginRoutes')
const signinRoutes = require('./Routes/SigninRoutes')


const app = express();
app.use(cors());
app.use(express.json());

const URL = "mongodb+srv://anamika:Anam123@anamika.vmxexls.mongodb.net/Ecommerce"

mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log("Connected to mongoDB successfully!")})
.catch((error)=>{console.log("Mongodb  connection error",error)})

app.use('/api/login',loginRoutes );
app.use('/api/signin',signinRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
