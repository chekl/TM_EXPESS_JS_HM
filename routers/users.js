const express = require('express');
const router = express.Router();

const userMdware = require('../middlewares/user.mdware');

let userDocs = require('../mock/userDocs');

router.get('/', (req, res) => {
  res.json(userDocs);
});

router.get('/:email', userMdware.isEmailExist, (req, res) => {
  const user = userDocs.filter((u) => u.email != req.params.email);

  res.json(user);
});

router.post(
  '/',
  userMdware.validateUserParameters,
  userMdware.isEmailNotExist,
  (req, res) => {
    const newUser = { ...req.body, createdAt: new Date() };
    userDocs.push(newUser);
    res.json(newUser);
  }
);

router.patch('/:email', userMdware.isEmailExist, (req, res) => {
  userDocs = userDocs.map((u) =>
    u.email === req.params.email ? { ...u, ...req.body } : u
  );
  res.json(userDocs);
});

router.delete('/:email', userMdware.isEmailExist, (req, res) => {
  userDocs = userDocs.filter((u) => u.email != req.params.email);
  res.json(userDocs);
});

module.exports = router;
