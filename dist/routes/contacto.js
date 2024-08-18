"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactos_1 = require("../controllers/contactos");
const router = express_1.Router();
router.get('/', contactos_1.getContactos);
router.get('/:id', contactos_1.getContacto);
router.post('/', contactos_1.postContacto);
router.put('/:id', contactos_1.putContacto);
router.delete('/:id', contactos_1.deleteContacto);
exports.default = router;
//# sourceMappingURL=contacto.js.map