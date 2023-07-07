import express from "express";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import router from "./routes/route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", router);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
Connection();
