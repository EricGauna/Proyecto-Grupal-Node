const getPool = require("../../Database/getPool");

const insertProblemaImage = async (
  image,
  problemaId
) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO problemas_images (image, problemaId) VALUES (?, ?);",
    [image, problemaId]
  );

  return insertId;
};

module.exports = insertProblemaImage;
