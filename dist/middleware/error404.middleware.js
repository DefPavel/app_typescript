"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware404 = (req, res, next) => {
    var err = new Error("Страница не найдена");
    res.status(404);
    next(err);
};
exports.default = errorMiddleware404;
//# sourceMappingURL=error404.middleware.js.map