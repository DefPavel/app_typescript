"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware500 = (error, req, res, next) => {
    try {
        const status = error.status || 500;
        const message = error.message || 'Упс...';
        res.status(status).json({ message });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware500;
//# sourceMappingURL=error500.middleware.js.map