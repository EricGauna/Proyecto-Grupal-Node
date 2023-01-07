const {
  SelectProblemaId,
  updateProblemaId,
} = require("../../Repositories/problemas");
const {
  editProblemaIdSchema,
  ProblemasIdSchema,
} = require("../../Schemas/problemas");

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProblemasIdSchema.validateAsync(id);

    const problema = await SelectProblemaId(id);

    if (!problema) {
      generateError(
        "The post you are trying to update doesn't exist",
        404
      );
    }

    await editProblemaIdSchema.validateAsync(req.body);

    const updatedProblema = { ...post, ...req.body };

    await updateProblemaId(updatedProblema);

    res
      .status(200)
      .send({ status: "ok", data: updatedPost });
  } catch (error) {
    next(error);
  }
};

module.exports = editPost;
