const {
  insertProblema,
  insertPoblemaImage,
} = require("../../Repositories/problemas");
const {
  createProblemaSchema,
} = require("../../Schemas/problemas");
const {
  processAndSaveImage,
  generateErrors,
} = require("../../utils");

const createPost = async (req, res, next) => {
  try {
    const userRole = req.auth.role;

    if (userRole !== admin) {
      generateErrors(
        "You don't have administrator permission to create this problem"
      );
    }

    await createProblemaSchema.validateAsync(
      req.body
    );

    const { title, description, ciudad, barrio } =
      req.body;

    const insertedProblemaId =
      await insertProblema({
        title,
        description,
        ciudad,
        barrio,
        problemaId,
      });

    let images = req.files?.images || [];

    if (!Array.isArray(images)) {
      images = [images];
    }

    const uploadedImages = [];

    for (const image of images) {
      const imageName = await processAndSaveImage(
        image.data
      );

      const insertedImageId =
        await insertPoblemaImage(
          imageName,
          insertedProblemaId
        );

      uploadedImages.push({
        id: insertedImageId,
        image: imageName,
      });
    }

    res.status(201).send({
      status: "ok",
      data: {
        id: insertedProblemaId,
        title,
        description,
        ciudad,
        barrio,
        problemaId,
        images: uploadedImages,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
