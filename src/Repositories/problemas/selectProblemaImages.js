const getPool = require("../../Database/getPool");

const selectProblemaImages = async (postId) => {
  const pool = getPool();

  const [problemasImages] = await pool.query(
    "SELECT * FROM problemas_images WHERE problemaId = ?",
    [problemaId]
  );

  return problemasImages;
};

module.exports = selectProblemaImages;
