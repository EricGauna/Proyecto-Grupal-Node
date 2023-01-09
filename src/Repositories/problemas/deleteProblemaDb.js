const getPool = require("../../Database/getPool");

const deleteProblemaDb = async (id) => {
  const pool = getPool();

  await pool.query(
    "DELETE FROM problemas WHERE id = ?",
    [id]
  );
};

module.exports = deleteProblemaDb;
