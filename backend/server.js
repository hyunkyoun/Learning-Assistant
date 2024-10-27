const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const conversationRoute = require("./routes/Conversations");
// const messageRoute = require("./routes/messages");
const router = express.Router();
const path = require("path");

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

const app = express();
const PORT = process.env.PORT || 5001;
const authRoutes = require('./routes/authRoutes');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
});
  

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use("/api", conversationRoute);
app.use("/api", messageRoute);

app.listen(PORT, () => {
    console.log(`Backend server is running!`);
})