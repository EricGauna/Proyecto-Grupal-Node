const getPool = require("../../Database/getPool");

const selectLikeProblemaUser = async (
  problemaId,
  userId
) => {
  const pool = getPool();

  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE problemasId = ? AND userId = ?",
    [problemaId, userId]
  );

  return like;
};

module.exports = selectLikeProblemaUser;
