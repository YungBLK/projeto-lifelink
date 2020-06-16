const express = require('express');
const router = express.Router();

 const Main = require('../renders/main');
 const Contact = require('../renders/contact');
 const About = require('../renders/about');
 const Budgets = require('../renders/budgets');
// const Checkout = require('../renders/checkout');
// const Login = require('../renders/loginViva');
// const SaleCompletion = require('../renders/saleCompletion');
// const PrivacyTerms = require('../renders/privacyTerms');



// /* GET Privacy Terms page. */
// router.get('/privacy-terms', PrivacyTerms.retrieve);

// /* GET Termos de Uso page. */
// router.get('/termos-de-uso', PrivacyTerms.terms);

/* GET home page. */
router.get('/', Main.retrieve);

/* GET budgets page. */
router.get('/orcamentos', Budgets.retrieve);

/* GET contact page. */
router.get('/contato', Contact.retrieve);

/* GET how it works page. */
router.get('/sobre', About.retrieve);

// /* GET  checkout page. */
// router.get('/checkout', Checkout.retrieve);

// /* GET  login viva page. */
// router.get('/loginViva', Login.retrieve);

// /* GET sales page. */
// router.get('/meuViva', Sale.retrieve);

// /* GET complete page. */
// router.get('/sucesso', SaleCompletion.retrieve);

module.exports = router;