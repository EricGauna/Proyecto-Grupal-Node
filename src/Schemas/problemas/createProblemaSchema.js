const Joi = require("joi");

const createProblemaSchema = Joi.object({
  title: Joi.string()
    .min(4)
    .max(200)
    .required()
    .messages({
    }),
  description: Joi.string()
    .min(4)
    .max(5000)
    .required()
    .messages({
    }),
});

module.exports = createProblemaSchema;
