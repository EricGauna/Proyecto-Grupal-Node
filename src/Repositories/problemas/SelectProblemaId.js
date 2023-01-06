const getPool = require("../../Database/getPool");

const SelectProblemaId = async (id) => {
  const pool = getPool();

  const [[post]] = await pool.query(
    "SELECT p.*, COUNT(l.id) likes FROM problemas p LEFT JOIN likes l ON p.id = l.problemasId WHERE p.id = ?;",
    [id]
  );

  return post;
};

module.exports = SelectProblemaId;
