const getPool = require("../../Database/getPool");

const insertProblema = async (problema) => {
  const { title, description, barrio, ciudad, userId } = problema;

  const pool = getPool();

  const fecha = new Date().toISOString().slice(0, 19).replace("T", " ");

  const [{ insertId }] = await pool.query(
    "INSERT INTO problemas (fecha, title, description, barrio, ciudad, userId ) VALUES (?, ?, ?, ?, ?, ?)",
    [fecha, title, description, barrio, ciudad, userId]
  );

  return insertId;
};

module.exports = insertProblema;
