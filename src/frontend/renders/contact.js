const contact = {
    /** Página principal
   * @param {*} req
   * @param {*} res
   */
    retrieve(req, res) {
      const renderVariables = {};
      renderVariables.title = 'Contato | Lifelink';
      renderVariables.path = 'contact';
      renderVariables.controller = 'ContactController';
      renderVariables.description = 'Página de contato lifelink.';
      res.render('pages/contact', renderVariables);
    }
  };
  
  module.exports = contact;