"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContacto = exports.putContacto = exports.postContacto = exports.getContacto = exports.getContactos = void 0;
const contactos_1 = __importDefault(require("../models/contactos"));
const getContactos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactos = yield contactos_1.default.findAll();
    console.log("\nbuscando contactos\n total", contactos.length);
    if (contactos) {
        res.json(contactos);
    }
    else {
        console.log("\nBase de datos vacia\n");
        res.status(404).json({
            msg: `Base de datos vacia`
        });
    }
});
exports.getContactos = getContactos;
const getContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contacto = yield contactos_1.default.findByPk(id);
    if (contacto) {
        res.json(contacto);
    }
    else {
        res.status(404).json({
            msg: `No existe un contacto con el  id ${id}`
        });
    }
});
exports.getContacto = getContacto;
const postContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log("se procede a crear Contacto ", body);
    try {
        const existeEmail = yield contactos_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un contacto con el email ' + body.email
            });
        }
        const contacto = new contactos_1.default(body);
        yield contacto.save();
        setTimeout(() => {
            // Simular conexión a la base de datos
            console.log("estoy en set time out");
            res.json(contacto);
            // Resuelve la promesa con el archivo
        }, 2000); // 2000 es el tiempo de retraso en milisegundos
    }
    catch (error) {
        console.log(" api postContacto fallo", error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postContacto = postContacto;
const putContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const contacto = yield contactos_1.default.findByPk(id);
        if (!contacto) {
            return res.status(404).json({
                msg: 'No existe un contacto con el id ' + id
            });
        }
        yield contacto.update(body);
        res.json(contacto);
    }
    catch (error) {
        console.log("error api put contacto", error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putContacto = putContacto;
const deleteContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*     const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
    
        await usuario.update({ estado: false });
    
    
     */
    res.json("No disponible esta API");
});
exports.deleteContacto = deleteContacto;
//# sourceMappingURL=contactos.js.map