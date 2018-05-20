import test from "./test";
import express from "express";

const app = express();
test("logging test production again");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api production again blah" });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port :${port}`);
});
