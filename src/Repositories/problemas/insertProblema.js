const getPool = require("../../Database/getPool");

const insertProblema = async (problema) => {
  const { title, description , ciudad, barrio } = problema;

  const pool = getPool();

  const [{ insertProblema }] = await pool.query(
    "INSERT INTO problemas (title, description, barrio, ciudad ) VALUES (?, ?, ?, ?)",
    [title, description, ciudad, barrio ]
  );

  return insertProblema;
};

module.exports = insertProblema;
