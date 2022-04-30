const BaseJoi = reqiure("joi");
const sanitizeHtml = require("sanitize-html");
const extension = (joi) => ({
  type: "string",
  base: joi.string(),
  messages: {
    "string.escapeHTML": "{{#label}} must not include HTML!",
  },
  rules: {
    escapeHTML: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });
        if (clean !== value)
          return helpers.error("string.escapeHTML", { value });
        return clean;
      },
    },
  },
});
const Joi = BaseJoi.extend(extension);

module.exports.eventSchema = Joi.object({
  event: Joi.object({
    title: Joi.string().required().escapeHTML(),
    // image: Joi.string().required(),
    location: Joi.string().required().escapeHTML(),
    description: Joi.string().required().escapeHTML(),
    date: Joi.date().required().escapeHTML(),
    // owner: Joi.string().required().escapeHTML()
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    body: Joi.string().required().escapeHTML(),
  }).required(),
});
