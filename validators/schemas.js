const Joi = require("joi-oid");

const schemas = Joi.object().keys({
  Category: {
    name: Joi.string().required().min(3),
    name_ar: Joi.string().required().min(3),
    code: Joi.string().required().min(3),
    industry: Joi.objectId(),
  },
  categoryList: {
    id: Joi.objectId().required(),
  },
});
module.exports = schemas;
