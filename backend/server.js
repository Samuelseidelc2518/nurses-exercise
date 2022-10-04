const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./config/db");

const app = express();

connectToDB();

app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use(require("./routes/main.routes"));


app.listen(app.get('port'), () => console.log("Server connected! to port: ", app.get('port')));