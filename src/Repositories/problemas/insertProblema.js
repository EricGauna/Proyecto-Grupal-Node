const getPool = require("../../Database/getPool");

const insertProblema = async (problema) => {
  const { title, description , barrio, ciudad, userId } = problema;

  const pool = getPool();

  const [{ insertProblema }] = await pool.query(
    "INSERT INTO problemas (title, description, barrio, ciudad, userId ) VALUES (?, ?, ?, ?, ?)",
    [title, description, barrio, ciudad, userId ]
  );

  return insertProblema;
};

module.exports = insertProblema;
