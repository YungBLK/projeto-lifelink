const express = require('express');
const router = express.Router();
const User = require('../api/user');

/** CONTACT */
router.route('/contact')
  .post(User.contact);

router.route('/newsletter').post(User.newsletter);

module.exports = router;
