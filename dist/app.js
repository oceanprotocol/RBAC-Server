var express = require('express');
var app = express();
var port = 3000;
var indexRouter = require('./routes/accessRoute');
app.use(express.json());
app.use('/', indexRouter);
app.listen(port, function () {
    console.log("RBAC app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map