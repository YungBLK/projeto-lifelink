const mailHelper = require('../../emails/mailHelper');
const contactActiveHelper = require('../../integrations/active/contactHelper');

/* eslint-disable no-console */
const contact = {
  send(req, res) {
    try {
      // Dados usuário
      const {
        name, email, subject, message
      } = req.body;

      // Checa campos obrigatórios
      if (!name || !email || !subject || !message) {
        console.log('\x1b[31m', "ERROR controllers/api/user > contact() > { status: false, error: 'Missing form fields parameter.' }");
        res.status(403).json({ status: false, error: 'Campos obrigatórios não preenchidos' });
        return;
      }

     mailHelper.contact(name, email, subject, message);
      res.status(201).json({ status: true });
    } catch (error) {
      console.log('\x1b[31m', `ERROR controllers/api/user > send() > { status: false, error: ${error} }`);
      res.status(403).json({ status: false, error });
    }
  },

  newsletter(req, res) {
    try {       
      // Dados usuário
      const {
        email
      } = req.body;

      // Checa campos obrigatórios
      if (!email) {
        console.log('\x1b[31m', "ERROR controllers/api/user > newsletter() > { status: false, error: 'Missing form fields parameter.' }");
        res.status(403).json({ status: false, error: 'Campos obrigatórios não preenchidos' });
        return;
      }

      contactActiveHelper.newsletter(email);
      res.status(201).json({ status: true });
    } catch (error) {
      console.log('\x1b[31m', `ERROR controllers/api/user > authenticate() > { status: false, error: ${error} }`);
      res.status(403).json({ status: false, error });
    }
  }
};

module.exports = contact;
