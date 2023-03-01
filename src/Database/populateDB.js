require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");


const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Inserting users...");

    await pool.query(`
        INSERT INTO users (email, password, name, role ) VALUES 
        ("Martina@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Martina", "admin"),
        ("Lucas@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Lucas", "normal"),
        ("Jesus@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Chuchi", "normal")
    `);

    console.log("Inserting problemas...");

/*     await pool.query(`
        INSERT INTO problemas (title, description, barrio, ciudad, userId) VALUES 
        ("Obras en la acera", "Obras en la esquina de Panaderos con Gamazo, llevan 4 dias trabajando y queda mucho por hacer", "Lavapies", "Madrid", 1),
        ("Socabones en la calzada", "Socabones a la altura del N21 en la calle Portugal", "Moncloa", "Madrid", 1),
        ("Derrumbe de casa", "Derrumbe de casa de 2 alturas obstaculizanbdo calzada y acera", "Vallecas", "Madrid", 1),
        ("Acera rota", "Acera pendiente de reparacion avisado al ayuntamiento", "Vallecas", "Madrid", 1)
    `); */
    console.log("Inserting problemasImages...");

  /*    await pool.query(`
    INSERT INTO problemas_images (image, problemaId) VALUES 
    ("cf8f253b-5c65-4231-95b2-cd461171f7b8.jpeg", 1)
    ("7977d302-0122-4b29-9407-d8573d27aedc.jpeg", 1)
    `)  */

    console.log("Inserting likes...");

  /*   await pool.query(`
        INSERT INTO likes (problemasId, userId) VALUES 
        (1, 2),
        (1, 3),
        (2, 3)
    `); */

    console.log("¡All done! 🚀");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
