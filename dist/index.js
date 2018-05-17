"use strict";

var _test = require("./test");

var _test2 = _interopRequireDefault(_test);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _test2.default)("logging test production again");

app.get("/test", function (req, res, next) {
  res.send({ express: "testing api production again" });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on port :" + port);
});
//# sourceMappingURL=index.js.map