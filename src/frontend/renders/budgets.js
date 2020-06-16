const budgets = {
    /** Página principal
   * @param {*} req
   * @param {*} res
   */
    retrieve(req, res) {
      const renderVariables = {};
      renderVariables.title = 'Orçamentos | Lifelink';
      renderVariables.path = 'budgets';
      renderVariables.controller = 'BudgetsController';
      renderVariables.description = 'Página de orçamentos lifelink.';
      res.render('pages/budgets', renderVariables);
    }
  };
  
  module.exports = budgets;