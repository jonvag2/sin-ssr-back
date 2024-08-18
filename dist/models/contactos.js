"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Contacto = connection_1.default.define('Contacto', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    empresa: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    mensaje: {
        type: sequelize_1.DataTypes.STRING
    },
    evento: {
        type: sequelize_1.DataTypes.STRING
    },
    id_evento: {
        type: sequelize_1.DataTypes.NUMBER
    },
});
exports.default = Contacto;
//# sourceMappingURL=contactos.js.map