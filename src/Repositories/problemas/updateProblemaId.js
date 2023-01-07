const getPool = require("../../Database/getPool");

const updateProblemaId = async (problema) => {
  const {
    id,
    title,
    description,
    barrio,
    ciudad
  } = problema;

  const pool = getPool();

  await pool.query(
    "UPDATE problemass SET title = ?, description = ?, barrio = ?, ciudad = ? WHERE id = ?",
    [title, description, id, barrio, ciudad]
  );
};

module.exports = updateProblemaId;
