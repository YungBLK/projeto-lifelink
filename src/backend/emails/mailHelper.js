const mailer = require('./mailer');

const mailHelper = {
 
  contact: (name, email, subject, message) => {
    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'contato@vivatecs.com',
      subject: `${subject}`,
      text: `\n\nMensagem:\n${message}`

    };
    mailHelper.send(mailOptions);
  },
  send: (mailOptions) => {
    if (process.env.NODE_ENV === 'production') {
      mailer.sendMail(mailOptions, (err, info) => {
        console.log(err);
        console.log(info);
      });
    }
  }
};

module.exports = mailHelper;
