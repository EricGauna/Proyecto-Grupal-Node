const {
  insertProblema,
  insertPostImage,
} = require("../../Repositories/problemas");
const {
  createProblemaSchema,
} = require("../../Schemas/problemas");
const {
  processAndSaveImage, generateErrors,
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

    const { title, description, ciudad, barrio } = req.body;

    const insertedPostId = await insertPost({
        title,
        description,
        ciudad,
        barrio
    });

    // Las imágenes que envía el cliente en la petición las vamos a recoger en req.files.images. Si el cliente no envía ninguna imagen, req.files va a ser undefined. Creamos una variable "images" donde guardamos req.files.images, o en caso de que no haya ninguna imagen, un array vacío
    let images = req.files?.images || [];

    // Si el cliente solo envía una imagen, req.files.images va a ser un objeto en vez de un array. Si images no es un array (es decir, si es un objeto), convertimos images a un array que tiene el objeto dentro. Esto lo hacemos para que el bucle que hacemos mas abajo no rompa (ya que no puedes recorrer un objeto con un for of)
    if (!Array.isArray(images)) {
      images = [images];
    }

    // Creamos un array "uploadedImages" donde guardaremos la información de las fotos que sube el cliente. Este array luego se lo mandaremos en la respuesta, para que pueda ver los datos de las fotos que se han subido
    const uploadedImages = [];

    // Recorremos cada imagen del array de images
    for (const image of images) {
      // Procesamos y guardamos la imagen en la carpeta de uploads. La función nos retorna el nombre con el que se ha guardado la imagen
      const imageName = await processAndSaveImage(
        image.data
      );

      // Insertamos la información de la imagen en la DB. El repositorio nos retorna el id de la imagen insertada
      const insertedImageId =
        await insertPostImage(
          imageName,
          insertedPostId
        );

      // Metemos en el array de "uploadedImages" un objeto con la información de la imagen guardada e insertada en la DB
      uploadedImages.push({
        id: insertedImageId,
        image: imageName,
      });
    }

    // Enviamos una respuesta con status 201 y los datos del post creado (incluidas las imágenes que se han subido)
    res.status(201).send({
      status: "ok",
      data: {
        id: insertedPostId,
        title,
        description,
        userId,
        images: uploadedImages,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
