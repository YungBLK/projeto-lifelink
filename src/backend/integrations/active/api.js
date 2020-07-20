/* eslint-disable no-console */
const request = require('request');

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

const URL = {
  CONTACTS: 'https://lucioigf2.api-us1.com/api/3/contact/sync',
  TAGS: 'https://lucioigf2.api-us1.com/api/3/contactTags',
  LISTS: 'https://lucioigf2.api-us1.com/api/3/contactLists'
};

const iugu = {
  createRequest(method, url, data) {
    const { token } = config.active;
    const options = {
      headers: {
        'Api-Token': token
      },
      method,
      url,
      json: true
    };

    if (data) {
      switch (method) {
        case HTTP_METHOD.GET:
          options.qs = data;
          break;

        case HTTP_METHOD.PUT:
        case HTTP_METHOD.POST:
          options.body = data;
          break;
        case HTTP_METHOD.DELETE:
          break;

        default:
          throw new Error('Missing method');
      }
    }

    console.log('creating request: ', options);

    // Return new promise
    return new Promise((resolve, reject) => {
      // Do async job
      request(options, (err, resp, body) => {
        if (err) {
          reject(err);
        } else {
          console.log('\n\n\n\n\n');
          console.log('OPTIONS:', options);
          console.log('BODY:', body);
          console.log('\n\n\n\n\n');
          resolve(body);
        }
      });
    });
  },


  /** *****************
   * CONTACTS
   ****************** */
  createOrUpdateContact(data) {
    return this.createRequest(HTTP_METHOD.POST, URL.CONTACTS, data);
  },

  /** *****************
   * TAGS
   ****************** */
  addTagToContact(data) {
    return this.createRequest(HTTP_METHOD.POST, URL.TAGS, data);
  },

  /** *****************
   * LISTS
   ****************** */
  addContactToList(data) {
    return this.createRequest(HTTP_METHOD.POST, URL.LISTS, data);
  },

  removeContactToList(data) {
    return this.createRequest(HTTP_METHOD.POST, URL.LISTS, data);
  }
};

module.exports = iugu;
