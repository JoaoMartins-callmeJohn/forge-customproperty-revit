const express = require('express');
const { authRefreshMiddleware } = require('../services/forge/auth.js');
const { getAppBundles } = require('../services/forge/da4r.js');

let router = express.Router();

router.use(authRefreshMiddleware);

router.get('/bundles', async function (req, res, next) {
  try {
      // const bundles = await getAppBundles(req.internalOAuthToken);
      const bundles = await getAppBundles();
      res.json(bundles);
  } catch (err) {
      next(err);
  }
});

router.post('/bundles', async function (req, res, next) {
  try {
      res.json('');
  } catch (err) {
      next(err);
  }
});

module.exports = router;