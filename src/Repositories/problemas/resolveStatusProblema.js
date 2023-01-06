const getPool = require("../../Database/getPool");
const {
  id,
} = require("../../Schemas/users/createUserSchema");

const resolveStatusProblema = async (
  problema
) => {
  const { id } = problema;
  const pool = getPool();

  await pool.query(
    "UPDATE problemas SET estado = 0 WHERE id = ?;",
    [id]
  );
};

module.exports = resolveStatusProblema;
