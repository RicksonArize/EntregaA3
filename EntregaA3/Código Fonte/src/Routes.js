//Rotas da nossa aplicação
import { Router } from "express";

import { 
  createClienteTable,
  insertCliente, updateCliente, selectClientes, selectCliente, deleteCliente 
} from './Controler/cliente.js';

import { 
  createEstoqueTable,
  insertEstoque, updateEstoque, selectEstoques, selectEstoque, deleteEstoque 
} from './Controler/estoque.js';


const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    });
});


router.get('/createClienteTable', createClienteTable);
router.get('/clientes', selectClientes);
router.get('/cliente/:id', selectCliente);
router.post('/cliente', insertCliente);
router.put('/cliente/:id', updateCliente);
router.delete('/cliente/:id', deleteCliente);

router.get('/createEstoqueTable', createEstoqueTable);
router.get('/produtos', selectEstoques);
router.get('/produto/:id', selectEstoque);
router.post('/produto', insertEstoque);
router.put('/produto/:id', updateEstoque);
router.delete('/produto/:id', deleteEstoque);

export default router;
