import test from "./test";
import express from "express";

const app = express();
test("logging test production again");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api production again blah" });
});

// Create link to  build directory
const client = __dirname + "/client/src";
app.use(express.static(client));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port :${port}`);
});
