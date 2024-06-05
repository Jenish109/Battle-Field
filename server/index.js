const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const listroute = require("./routes/listroute");

const PORT = 5008;

app.use(cors());
app.use(express.json());
app.use('/', express.static('assets'));

const mongoUri = "mongodb+srv://jenisvaghasiya09:ekUcvLTGqqCVIqy4@cluster0.8jgr0ai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/home', listroute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});