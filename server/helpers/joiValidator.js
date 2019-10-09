import Joi from 'joi';

const joiFormater = str => str.split('"').join('');

export const validate = (data, schema) => {
  const { error } = Joi.validate(data, schema);
  if (!error) return null;
  const { message } = error.details[0];
  return joiFormater(message);
};

export default validate;
