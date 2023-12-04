const express = require('express');

const app = express();

const port = 3000;

const userRouter = require('./routers/users');
const studentRouter = require('./routers/students');
const articleRouter = require('./routers/articles');

app.use(express.json());
app.use('/users', userRouter);
app.use('/students', studentRouter);
app.use('/articles', articleRouter);

app.listen(port, () => {
  console.log('Server is working!');
});
