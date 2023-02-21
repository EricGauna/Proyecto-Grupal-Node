const getPool = require("../../Database/getPool");

const selectProblemasImages = async (Id) => {
  const pool = getPool();

  const [problemasImages] = await pool.query(
    "SELECT * FROM problemas_images WHERE problemaId = ?",
    [Id]
  );

  return problemasImages;
};

module.exports = selectProblemasImages;
