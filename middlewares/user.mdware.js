const userDocs = require('../mock/userDocs');

function isEmailExist(req, res, next) {
  const user = userDocs.find((u) => u.email === req.params.email);

  if (!user) {
    return res.status(404).send({ error: 'This email is not exist!' });
  }

  next();
}

function isEmailNotExist(req, res, next) {
  const user = userDocs.find((u) => u.email === req.body.email);

  if (user) {
    return res.status(404).send({ error: 'This email is exist!' });
  }

  next();
}

function validateUserParameters(req, res, next) {
  const requiredParams = [
    'firstName',
    'lastName',
    'email',
    'password',
    'age',
    'address',
    'tags',
  ];

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'You missed request body!' });
  }

  const missingParams = requiredParams.filter((param) => !req.body[param]);

  if (missingParams.length > 0) {
    return res
      .status(400)
      .json({ error: 'You missed some parameters!', missingParams });
  }

  next();
}

module.exports = { isEmailExist, validateUserParameters, isEmailNotExist };
