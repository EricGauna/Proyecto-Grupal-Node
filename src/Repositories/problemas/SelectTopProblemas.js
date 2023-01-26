const getPool = require("../../Database/getPool");

const SelectTopProblemas = async () => {
  const pool = getPool();

  const [problemas] = await pool.query(
    "SELECT *, COUNT(likes.id) Likes FROM likes GROUP BY problemasId ORDER BY Likes DESC LIMIT 10;"
  );

  return problemas;
};

module.exports = SelectTopProblemas;
