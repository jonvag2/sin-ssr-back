import { Router } from 'express';
import { getUsuarios, postUsuario } from '../controllers/usuariostalento';

const router = Router();


router.get('/',       getUsuarios );
/* router.get('/:id',    getUsuario ); */
router.post('/',      postUsuario );
router.post('/user',(req, res) => {
    res.send("todo lindo")
} );
/* router.put('/:id',    putUsuario );
router.delete('/:id', deleteUsuario ); */



export default router;