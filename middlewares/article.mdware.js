const articleDocs = require('../mock/articleDocs');

function isNameExist(req, res, next) {
  const article = articleDocs.find((a) => a.name === req.params.name);

  if (!article) {
    return res.status(404).send({ error: 'This article name is not exist!' });
  }

  next();
}

function isNameNotExist(req, res, next) {
  const article = articleDocs.find((a) => a.name === req.body.name);

  if (article) {
    return res.status(404).send({ error: 'This article name is exist!' });
  }

  next();
}

function isTagsExist(req, res, next) {
  if (!req.body.tags) {
    return res.status(400).send({ error: 'You missed tags in request body!' });
  }

  next();
}

function validateArticleParameters(req, res, next) {
  const requiredParams = ['name', 'description', 'type', 'tags'];

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

module.exports = {
  validateArticleParameters,
  isNameNotExist,
  isNameExist,
  isTagsExist,
};
