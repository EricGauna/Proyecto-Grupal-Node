const getPool = require("../../Database/getPool");

const insertProblemaImage = async (
  imageName,
  problemaId
) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO problemas_images (image, problemaId) VALUES (?, ?);",
    [imageName, problemaId]
  );

  return insertId;
};

module.exports = insertProblemaImage;
