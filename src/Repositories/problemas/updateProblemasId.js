const getPool = require("../../Database/getPool");

const updateProblemasId = async (problema) => {
  const {
    id,
    title,
    description,
    barrio,
    ciudad
  } = problema;

  const pool = getPool();

  await pool.query(
    "UPDATE problemas SET title = ?, description = ?, barrio = ?, ciudad = ? WHERE id = ?",
    [title, description, id, barrio, ciudad]
  );
};

module.exports = updateProblemasId;
