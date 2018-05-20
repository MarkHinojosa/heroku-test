import test from "./test";
import express from "express";

const app = express();
test("logging test production again");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api production again blah" });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port :${port}`);
});
