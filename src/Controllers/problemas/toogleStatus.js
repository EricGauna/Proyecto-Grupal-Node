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
/*       const resolved = await resolveStatusProblema(id);
 */
      // Este controller va alternando entre problema resuelto y no resuelto, de manera predefinida tiene 1(TRUE) como activo, le daremos la opcion de cambiar al admin de la pagina, a no resuelto si el problema vuelve a aparecer.
      let resolved;
      let statusCode;
      
// Si ya esta el estado como true(activo) lo pasamos a false, como resuelto, le asignamos el codigo 200. Si no cambiamos el estado False(resuelto) a True(Activo)
      if (problema) {
          resolveStatusProblema(id);
          resolved = false;
          statusCode = 200;
      } else {
          unresolveStatusProblema(id);
          resolved = true;
          statusCode = 200;
      }
    res
     .status(statusCode)
     .send({ status: "ok", data: { liked } });
  } catch (error) {
    next(error);
  }
};

module.exports = toogleStatus;
