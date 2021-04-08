const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/accessRoute');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`RBAC app listening at http://localhost:${port}`)
})