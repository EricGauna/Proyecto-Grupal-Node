const {
  SelectProblemasId,
  updateProblemasId,
} = require("../../Repositories/problemas");
const {
  editProblemasIdSchema,
  ProblemasIdSchema,
} = require("../../Schemas/problemas");

const editProblemas = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProblemasIdSchema.validateAsync(id);

    const problema = await SelectProblemasId(id);

    if (!problema) {
      generateError(
        "The post you are trying to update doesn't exist",
        404
      );
    }

    await editProblemasIdSchema.validateAsync(req.body);

    const updatedProblema = { ...problema, ...req.body };

    await updateProblemasId(updatedProblema);

    res
      .status(200)
      .send({ status: "ok", data: updatedPost });
  } catch (error) {
    next(error);
  }
};

module.exports = editProblemas;
