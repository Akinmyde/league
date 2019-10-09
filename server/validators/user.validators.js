import joiValidator from '../helpers/joiValidator';

export const signupValidator = (req, res, next) => {
    const { body: data } = req;
    const error = joiValidator(data);
    if (error) return res.status(400).send({ error });
    req.data = data;
    return next();
}