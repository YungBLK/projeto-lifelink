const contact = require('./contact');


const index = {
  contact(req, res) { return contact.send(req, res); },
  newsletter(req, res) {
      return contact.newsletter(req, res);
     },
};

module.exports = index;