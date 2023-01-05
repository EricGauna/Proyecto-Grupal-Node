const {
  SelectProblemas,
} = require("../../Repositories/problemas");
const {
  filterProblemasSchema,
} = require("../../Schemas/problemas");

const getProblema = async (req, res, next) => {
  try {
    await filterProblemasSchema.validateAsync(
      req.query
    );

    const posts = await SelectProblemas(req.query);

    res
      .status(200)
      .send({ status: "ok", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getProblema;
