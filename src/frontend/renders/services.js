const services = {
    /** Página principal
   * @param {*} req
   * @param {*} res
   */
    retrieve(req, res) {
      const renderVariables = {};
      renderVariables.title = 'Serviços | Lifelink';
      renderVariables.path = 'services';
      renderVariables.controller = 'ServicesController';
      renderVariables.description = 'Página descrevendo os servicos atuacao da Lifelink';
      res.render('pages/services', renderVariables);
    }
  };
  
  module.exports = services;