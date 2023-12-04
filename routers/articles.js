const express = require('express');
const router = express.Router();

const articleMdware = require('../middlewares/article.mdware');

let articleDocs = require('../mock/articleDocs');

router.get('/', (req, res) => {
  res.json(articlesData);
});

router.post(
  '/',
  articleMdware.validateArticleParameters,
  articleMdware.isNameNotExist,
  (req, res) => {
    articleDocs.push(req.body);
    res.json(articleDocs);
  }
);

router.patch(
  '/:name',
  articleMdware.isTagsExist,
  articleMdware.isNameExist,
  (req, res) => {
    articleDocs = articleDocs.map((a) =>
      a.name === req.params.name ? { ...a, tags: req.body.tags } : a
    );
    res.json(articleDocs);
  }
);

module.exports = router;
