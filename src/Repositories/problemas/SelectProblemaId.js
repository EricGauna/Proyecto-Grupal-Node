const getPool = require("../../Database/getPool");

const SelectProblemaId = async (id) => {
  const pool = getPool();

  const [[problema]] = await pool.query(
    "SELECT p.*, COUNT(l.id) likes FROM problemas p LEFT JOIN likes l ON p.id = l.problemasId WHERE p.id = ?;",
    [id]
  );

  return problema;
};

module.exports = SelectProblemaId;
