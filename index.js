const express = require('express');

const app = express();

const port = 3000;

const userRouter = require('./routers/users');
const studentRouter = require('./routers/students');
const articleRouter = require('./routers/articles');

const logger = require('./middlewares/logger.mdware');
const errorHandler = require('./middlewares/errors.mdware');

app.use(express.json());
app.use(logger);
app.use(errorHandler);

app.use('/users', userRouter);
app.use('/students', studentRouter);
app.use('/articles', articleRouter);

app.listen(port, () => {
  console.log('Server is working!');
});
