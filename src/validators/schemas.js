const Joi = require("joi-oid");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const catSchema = Joi.object().keys({
  Category: {
    name: Joi.string().required().min(3),
    name_ar: Joi.string().required().min(3),
    code: Joi.string().required().min(3),
    industry: Joi.objectId(),
  },
  // categoryList: {
  //   id: Joi.string().custom((value, helpers) => {
  //     const filtered = ObjectID.isValid(value)
  //     return !filtered ? helpers.error("any.invalid") : value;
  // },
  // "invalid objectId", ).required(),
  // },
});
// module.exports = schemas;

exports.validateCategory = validator(catSchema);
