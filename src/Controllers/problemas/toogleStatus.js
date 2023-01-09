const {
  SelectProblemaId,
  resolveStatusProblema,
  unresolveStatusProblema,
} = require("../../Repositories/problemas");
const {
  ProblemasIdSchema,
} = require("../../Schemas/problemas");
const { generateErrors } = require("../../utils");

const toogleStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProblemasIdSchema.validateAsync(id);

    const problema = await SelectProblemaId(id);


    if (!problema) {
      generateErrors(
        "The problem you are trying to resolve doesn't exist",
        404
      );
    }
    console.log(problema.estado);
    const problemResolvedFun = (problem) =>
    {
      if (problema.estado === 1) {
      resolveStatusProblema(id);
       } else {
      unresolveStatusProblema(id);
      }return problem
    }
    const problemResolved = problemResolvedFun(problema);
    res
      .status(400)
      .send({ status: "ok", data: { problemResolved } });
  } catch (error) {
    next(error);
  }
};

module.exports = toogleStatus;
