var express = require("express");
var router = express.Router();


var jogosEmAltaController = require('../controllers/jogosEmAltaController');


router.get("/obterDadosPizza/:id_usuario/:Fkid_Quiz", function (req, res){
    jogosEmAltaController.GraficodePizza(req, res);
});

router.get('/obterDados', function (req, res){
    jogosEmAltaController.GraficodeBarra(req, res);
});

module.exports = router;