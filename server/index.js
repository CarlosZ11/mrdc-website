import app from "./app.js";
import { conenectDB } from "./config/MongoDb.js";

conenectDB();
app.listen(3001, () => {
  console.log("server run in port", 3001);
});
