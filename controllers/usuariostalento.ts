import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Usuariotxt from '../models/usuariostalento';
import * as fs from 'fs';



export const getUsuarios = async( req: Request , res: Response ) => {

    Usuariotxt().then((resultado) => {
    const usuariosparse = JSON.parse(resultado);
    console.log("Se leyo archivo correctamente con ",  usuariosparse.length , " registros");
    res.status(200).send(usuariosparse);
    
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send("no se logro leer el archivo");

  });
   
}

/* export const getUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if( usuario ) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el  id ${ id }`
        });
    }


} */

export const postUsuario = async( req: Request , res: Response ) => {

    const { body } = req;

    /* leo el archivo */
    try {
        const usuarios = await Usuariotxt();
        let jsonusuarios = JSON.parse(usuarios);

        jsonusuarios.push(body);
        let updatedData= JSON.stringify(jsonusuarios);
        fs.writeFileSync('public/archivotalento.txt', updatedData);
        res.json( "usuario " + body.nombre  + " creado" );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }



}

/* export const putUsuario = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await usuario.update( body );

        res.json( usuario );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
} */


/* export const deleteUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await usuario.update({ estado: false });

    


    res.json(usuario);
} */

