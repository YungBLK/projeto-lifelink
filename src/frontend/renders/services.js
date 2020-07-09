const services = {
    /** Página principal
   * @param {*} req
   * @param {*} res
   */
    retrieve(req, res) {
      const renderVariables = {};
      renderVariables.title = 'Serviços | Lifelink';
      renderVariables.path = 'home';
      renderVariables.controller = 'MainController';
      renderVariables.description = 'Página principal da marca LIFELINK.';
      res.render('pages/main', renderVariables);
    }
  };
  
  module.exports = main;