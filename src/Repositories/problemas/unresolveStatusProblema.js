const getPool = require("../../Database/getPool");
const {
  id,
} = require("../../Schemas/users/createUserSchema");

const unresolveStatusProblema = async (
  problema
) => {
  const { id } = problema;
  const pool = getPool();

  await pool.query(
    "UPDATE problemas SET estado = 1 WHERE id = ?;",
    [id]
  );
};

module.exports = unresolveStatusProblema;
