require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongose = require("mongoose");

const userRoutes = require("./routes/user.route");
//port
const port = process.env.PORT || 4000;

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);
//test api
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Crucial mart server!" });
});

//bypassed api's
app.use("/api/users/", userRoutes);
//mongodb
mongose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server run on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//..
