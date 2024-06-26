import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
});

 
export default Usuario;