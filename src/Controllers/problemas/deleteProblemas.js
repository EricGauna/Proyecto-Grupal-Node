const {
  SelectProblemasId,
  deleteProblemaDb,
} = require("../../Repositories/problemas");
const {
  ProblemasIdSchema,
} = require("../../Schemas/problemas");
const { generateErrors } = require("../../utils");

const deleteProblemas = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProblemasIdSchema.validateAsync(id);

    const problema = await SelectProblemasId(id);

    if (!problema) {
      generateErrors("Problem doesn't exist", 404);
    }
    await deleteProblemaDb(id);
    res
      .status(200)
      .send({
        status: "ok",
        message: "Problem deleted",
      });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProblemas;
