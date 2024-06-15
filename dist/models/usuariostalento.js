"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* import db from '../db/connection'; */
const fs = __importStar(require("fs"));
const Usuariotxt = () => {
    return new Promise((resolve, reject) => {
        try {
            const archivo = fs.readFileSync('public/archivotalento.txt', 'utf8');
            setTimeout(() => {
                // Simular conexión a la base de datos
                console.log("estoy en set time out");
                resolve(archivo); // Resuelve la promesa con el archivo
            }, 5000); // 2000 es el tiempo de retraso en milisegundos
        }
        catch (err) {
            console.log("No se leyo archivo");
            console.error(err);
            reject(err); // Rechaza la promesa con el error
        }
    });
};
const sequelize = new sequelize_1.Sequelize('jonapisc_plataforma', 'jonapisc_plata', 'jon102003123', {
    host: 'jonapiscope.com',
    dialect: 'mysql',
    port: 3306
});
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    user_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: 'User'
});
module.exports = User;
exports.default = Usuariotxt;
//# sourceMappingURL=usuariostalento.js.map