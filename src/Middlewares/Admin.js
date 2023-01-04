const {
  selectUserById,
} = require("../repositories/users");
const { generateError } = require("../utils");

const checkAdmin = async (req, res, next) => {
  try {
    const loggedUserId = req.auth.id;

    const user = await selectUserById(
      loggedUserId
    );

    if (user.role !== "admin") {
      generateError(
        "You dont't have permissions to perform this action",
        403
      );
    }

    // Si no salta ningún error, hacemos next() para ir al controller
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAdmin;
