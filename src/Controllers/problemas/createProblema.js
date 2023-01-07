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

const createProblema = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await createProblemaSchema.validateAsync(
      req.body
    );

    const { title, description, barrio, ciudad } =
      req.body;

    const insertedProblemaId =
      await insertProblema({
        title,
        description,
        barrio,
        ciudad,
        userId,
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
        barrio,
        ciudad,
        userId,
        images: uploadedImages,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createProblema;
