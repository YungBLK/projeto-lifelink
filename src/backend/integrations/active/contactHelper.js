const active = require('./api');

const async = require('async');

const GERAL = 3;
const CLIENTES = 4;
const OPORTUNIDADES = 5;
const NEWSLETTER_TAG = 4;
const CADASTRO_TAG = 2;

const helper = {
  createOrUpdate: user => new Promise((resolve, reject) => {
    let firstName = user.name;
    let lastName = '';
    if (user.name.indexOf(' ') !== -1) {
      firstName = user.name.substring(0, user.name.indexOf(' '));
      lastName = user.name.substring(user.name.indexOf(' ') + 1);
    }
    const data = {
      contact: {
        email: user.email,
        firstName,
        lastName,
        phone: user.phone_prefix + user.phone
      }
    };
    active.createOrUpdateContact(data).then((res) => {
      if (!res.contact) {
        reject(new Error('Não foi possível criar/atualizar contato'));
      } else {
        // helper.addTag(res.contact.id, CADASTRO_TAG);
        // helper.addToList(res.contact.id, OPORTUNIDADES);
        resolve(res.contact);
      }
    }).catch(reject);
  }),

  addTag: (idActiveUser, idTag) => new Promise((resolve, reject) => {
    const data = {
      contactTag: {
        contact: idActiveUser,
        tag: idTag
      }
    };
    active.addTagToContact(data).then((res) => {
      if (!res.contactTag) {
        reject(new Error('Não foi possível add Tag ao contato'));
      } else {
        resolve(res.contactTag);
      }
    }).catch(reject);
  }),

  addToList: (idActiveUser, idList) => new Promise((resolve, reject) => {
    async.series({
      removeOportunidades: function removeOportunidades(callback) {
        if (idList === CLIENTES) {
          helper.removeToList(idActiveUser, OPORTUNIDADES)
            .then(() => {
              callback();
            });
        } else {
          callback();
        }
      }
    }, () => {
      const data = {
        contactList: {
          list: idList,
          contact: idActiveUser,
          status: 1
        }
      };
      active.addContactToList(data).then((res) => {
        if (!res.contactList) {
          reject(new Error('Não foi possível add contato à lista'));
        } else {
          resolve(res.contactList);
        }
      }).catch(reject);
    });
  }),

  removeToList: (idActiveUser, idList) => new Promise((resolve, reject) => {
    const data = {
      contactList: {
        list: idList,
        contact: idActiveUser,
        status: 2
      }
    };
    active.removeContactToList(data).then((res) => {
      if (!res.contactList) {
        reject(new Error('Não foi possível remover contato da lista'));
      } else {
        resolve(res.contactList);
      }
    }).catch(reject);
  }),

  newsletter: email => new Promise((resolve, reject) => {
    const data = {
      contact: {
        email
      }
    };
    active.createOrUpdateContact(data).then((res) => {
      if (!res.contact) {
        reject(new Error('Não foi possível criar/atualizar contato'));
      } else {
        // helper.addTag(res.contact.id, NEWSLETTER_TAG);
        // helper.addToList(res.contact.id, GERAL);
        resolve(res.contact);
      }
    }).catch(reject);
  })
};

module.exports = helper;
