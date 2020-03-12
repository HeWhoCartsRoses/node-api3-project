module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}

function logger(req, res, next) {
    res.send(`${Date.now()}, ${req.method}, ${req.originalUrl}`);
    next();
}

function validateUserId(id) {
    if (id === valid) {
        return function (req, res, next) {
            req.user = id;

            next();
        };
    } else {
        return function (req, res, next) {
            res
                .status(400)
                .json({
                    message: "invalid user id"
                });
        }
    }
}

function validateUser(req, res, next) {
    if (!req.body) {
        return (
            res
            .status(400)
            .json({
                message: "missing user data"
            }));
    };

    if (!req.body.name) {
        return (
            res
            .status(400)
            .json({
                message: "missing required text field"
            }));
    };
    if (req.body && req.body.name) return next()
}

function validatePost(req, res, next) {
    if (!req.body) {
        return (
            res
            .status(400)
            .json({
                message: "missing post data"
            }));
    };
    if (!req.body.text) {
        return (
            res
            .status(400)
            .json({
                message: "missing required text field"
            }));
    };
    if (req.body.text && req.body) {
        return next;
    }
}