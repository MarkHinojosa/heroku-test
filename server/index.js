import test from "./test";
import express from "express";

const app = express();
test("logging test production again");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api production again" });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Listening on port :${port}`);
});
