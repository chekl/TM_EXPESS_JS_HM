const express = require('express');
const router = express.Router();

const articlesData = require('../mock/articleDocs');

router.get('/', (req, res) => {
  res.json(articlesData);
});

router.post('/', (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.type ||
    !req.body.tags
  ) {
    res.send('You missed some parameters!');
  }
  articlesData.articleDocs.push(req.body);
  res.json(articlesData);
});

router.patch('/:name', (req, res) => {
  if (!req.params.name) {
    res.send('You missed name!');
  }

  let article = articlesData.articleDocs.filter(
    (a) => a.name === req.params.name
  );

  if (!article) {
    res.send('This name is not appear!');
  }

  if (!req.body.tags) {
    res.send('You missed tags in request body!');
  }

  articlesData.articleDocs = articlesData.articleDocs.map((u) =>
    u.name === req.params.name ? { ...u, tags: [...req.body.tags] } : u
  );
  res.json(articlesData);
});

module.exports = router;
