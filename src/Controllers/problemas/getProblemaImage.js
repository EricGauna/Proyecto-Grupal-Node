const {
  ProblemasIdSchema,
} = require("../../Schemas/problemas");
const {
  SelectProblemaId,
  selectProblemaImages,
} = require("../../Repositories/problemas");
const { generateErrors } = require("../../utils");

const getProblema = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProblemasIdSchema.validateAsync(id);

    const problema = await SelectProblemaId(id);

    if (!problema) {
      generateErrors("Problem doesn't exist", 404);
    }

    const problemasImages = await selectProblemaImages(id);

    problema.images = problemasImages;

    res
      .status(200)
      .send({ status: "ok", data: problema });
  } catch (error) {
    next(error);
  }
};

module.exports = getProblema;
