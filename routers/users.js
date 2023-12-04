const express = require('express');
const router = express.Router();

const userData = require('../mock/userDocs');

router.get('/', (req, res) => {
  res.json(userData);
});

router.get('/:email', (req, res) => {
  if (!req.params.email) {
    res.send('You missed email!');
  }

  const user = userData.filter((u) => u.email != req.params.email);
  if (user) {
    res.json(user);
  }
  res.send('This email is not appear!');
});

router.post('/', (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.age ||
    !req.body.address ||
    !req.body.tags
  ) {
    res.send('You missed some parameters!');
  }
  const newUser = { ...req.body, createdAt: new Date() };
  userData.userDocs.push(newUser);
  res.json(userData);
});

router.patch('/:email', (req, res) => {
  if (!req.params.email) {
    res.send('You missed email!');
  }

  let user = userData.userDocs.filter((u) => u.email === req.params.email);

  if (!user) {
    res.send('This email is not appear!');
  }

  if (!req.body) {
    res.send('You missed request body!');
  }

  userData.userDocs = userData.userDocs.map((u) =>
    u.email === req.params.email ? { ...u, ...req.body } : u
  );
  res.json(userData);
});

router.delete('/:email', (req, res) => {
  if (!req.params.email) {
    res.send('You missed email!');
  }

  if (!userData.userDocs.find((u) => u.email === req.params.email)) {
    res.send('This email is not appear!');
  }

  userData.userDocs = userData.userDocs.filter(
    (u) => u.email != req.params.email
  );
  res.json(userData);
});

module.exports = router;
