const Joi = require("joi-oid");

const schemas = {
  Category: Joi.object().keys({
    name: Joi.string().required().min(3),
    name_ar: Joi.string().required().min(3),
    code: Joi.string().required().min(3),
    industry: Joi.objectId(),
  }),
  categoryList: {
    id: Joi.string().required(),
  },
};
module.exports = schemas;
