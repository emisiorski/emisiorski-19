const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");



const PORT = process.env.PORT || 3001;

const app = express();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/budget';


app.use(logger("dev"));


// fixing
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budget', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


app.use(require("./routes/api"));

// testing
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});