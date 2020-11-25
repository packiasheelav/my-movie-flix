const errorHandler = (err, req, res, next) => {
    if (err) {
        console.error(err);
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.sendStatus(400); // Bad request
        } else {
            return res.sendStatus(500);
        }
    }
    next();
}

module.exports = errorHandler;