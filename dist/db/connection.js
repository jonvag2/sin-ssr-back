"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('talentoDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
/* const db = new Sequelize('jonapisc_plataforma', 'jonapisc_plata', 'jon102003123', {
    host: 'jonapiscope.com',
    dialect: 'mysql',
    port: 3306
});
 */
/* esto si no existe la crea */
/* (async () => {
    await db.sync({ force: true }); // Sincronizar modelo con la base de datos
    const existe = await db.query(`SELECT * FROM usuarios ;`);
    console.log("\n la consulta es esta:" , existe[0])
    if (existe[0].length > 0) {
      console.log('\n La tabla "Usuarios" existe\n');
    } else {
      console.log(' La tabla "Usuarios" no existe');
    }
  })(); */
/* (async () => {
  await db.sync({ force: true }); // Sincronizar modelo con la base de datos
  const existe = await db.query(`SELECT * FROM jonapisc_plataforma.usuarios ;`);
  console.log("la consulta es esta:" , existe)
  if (existe[0].length > 0) {
    console.log('La tabla "Usuarios" existe');
  } else {
    console.log('La tabla "Usuarios" no existe');
  }
})(); */
exports.default = db;
//# sourceMappingURL=connection.js.map