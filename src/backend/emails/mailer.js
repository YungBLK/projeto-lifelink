const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const mailer = {
  /**
   * Create email transporter and send emails
   *
   * @param: options {Email options to send}
   */
  sendMail(options, callback) {
    // Create email transporter
    const transporter = nodemailer.createTransport(smtpTransport({
      host: 'mail.vivatecs.com',
      name: 'vivatecs.com',
      port: 465,
      auth: {
        user: 'contato@vivatecs.com',
        pass: 'h?rv]@qhHdrf1'
      },
      tls: {
        rejectUnauthorized: false
      }
    }));

    // Send email
    transporter.sendMail(options, (err, info) => {
      if (callback) {
        callback(err, info);
      }
    });
  },

  /**
 * Render email layout using ejs
 *
 * @param: view {ejs email template view}
 * @param: variables {array with email data}
 * @return: html renderized template
 */
  template(view, variables) {
    // Get email template
    const template = fs.readFileSync(`${__dirname}/../emails/views${view}`, 'utf8');

    // Render ejs email
    return ejs.render(template, variables);
  }
};

module.exports = mailer;
