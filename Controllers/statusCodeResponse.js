class StatusCodeResponse {
    ResponseOk(res) {
        res.sendStatus(200);
    }

    ResponseCreated(res) {
        res.sendStatus(201);
    }

    ResponseUnauthorized(res) {
        res.sendStatus(401);
    }

    ResponseServerError(res) {
        res.sendStatus(500);
    }
}

module.exports = StatusCodeResponse;