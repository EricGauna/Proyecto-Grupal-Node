const { SelectTopProblemas } = require("../../Repositories/problemas");

const getTopProblemas = async (req, res, next) => {
  try {
    const problemas = await SelectTopProblemas();

    res.status(200).send({ status: "ok", data: problemas });
  } catch (error) {
    next(error);
  }
};

module.exports = getTopProblemas;
