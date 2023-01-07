const getPool = require("../../Database/getPool");

const resolveStatusProblema = async (id) => {
  const pool = getPool();

  await pool.query(
    "UPDATE problemas SET estado = 0 WHERE id = ?;",
    [id]
  );
};

module.exports = resolveStatusProblema;
