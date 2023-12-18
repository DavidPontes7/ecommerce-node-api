import express from 'express';
import { recuperarTodosProdutosController } from './controllers';
import { contentTypeMiddleware } from '@main/presentation/http/middlewares/content-type.middlewares';
import { validaInputInserirCategoria } from '../middlewares/valida-input-inserir-categoria.middlewares';
import { RecuperarTodosProdutosExpressController } from './controllers/recuperar-todos-produtos.express.controller';

const produtoRouter = express.Router();

produtoRouter.get(
    '/',
    (request, response, next) =>  recuperarTodosProdutosController.recuperar(request, response, next)
)

export { produtoRouter };