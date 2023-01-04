const getPool = require("../../Database/getPool");

const insertProblema = async (problema) => {
  const { title, description } = problema;

  const pool = getPool();

  const [{ insertProblema }] = await pool.query(
    "INSERT INTO problemas (title, description, foto ) VALUES (?, ?, ?)",
    [title, description ]
  );

  return insertProblema;
};

module.exports = insertProblema;
