const yup = require("yup");

exports.createProductSchema = yup.object({
  name: yup.string().required("Name must be added").min(3),
  name_ar: yup.string().required().min(3),
  gallery: yup.string(),
  content: yup.string().required().min(3),
  content_ar: yup.string().required().min(3),
  tags: yup.array().min(1, "1 tag must be at least added"),
  short_description: yup.string().min(3),
  short_description_ar: yup.string().min(3),
  industry: yup
    .string()
    .required("Industry id must be a valid ObjectId")
    .trim()
    .transform((value) => {
      if (isValidObjectId(value)) {
        return value;
      }
      return "";
    }),
  category: yup
    .string()
    .required("Category id must be a valid ObjectId")
    .trim()
    .transform((value) => {
      if (isValidObjectId(value)) {
        return value;
      }
      return "";
    }),
  price: yup.number().required(),
  quantity: yup.number().required().default(10),
});
