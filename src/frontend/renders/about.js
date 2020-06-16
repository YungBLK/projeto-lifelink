const about = {
    /** Página principal
   * @param {*} req
   * @param {*} res
   */
    retrieve(req, res) {
      const renderVariables = {};
      renderVariables.title = 'Sobre | Lifelink';
      renderVariables.path = 'about';
      renderVariables.controller = 'AboutController';
      renderVariables.description = 'Sobre a lifelink.';
      res.render('pages/about', renderVariables);
    }

  };
  
  module.exports = about;