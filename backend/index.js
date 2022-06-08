const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  methods: ["GET", "POST"],
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "gruvii",
  port: "3306"
});

app.get("/", (req, res) => {
  console.log("success");

  res.json({ message: "success" });
});

//remember to install bcrypt
app.post("/new_user", (req, res) => {
  let data = req.body;
  data = {
    first_name: "allon",
    last_name: "ahmed",
    email_address: "allonahmed@mec.science",
    password: "password"
  };
  const query =
    "INSERT INTO gruvii.user_information(first_name, last_name, email_address, password) VALUES (?,?,?,?)";
  db.query(
    query,
    [data.first_name, data.last_name, data.email_address, data.password],
    (error, results) => {
      if (error) res.send(error);
      else res.send(results);
    }
  );
});

app.listen(3003, () => {
  //test listen to be sure the server is running on port
  console.log("Listening on Port", 3003);
});
