export const loggerMiddleware = (req, res, next) => {
    console.log(`Request...`);
    next();
};