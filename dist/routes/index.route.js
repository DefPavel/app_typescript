"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoute {
    constructor() {
        this.path = '/';
        this.router = express_1.Router();
        this.indexController = new index_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Пример с middleware
        //this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
        this.router.get(`${this.path}`, this.indexController.index);
    }
}
exports.default = IndexRoute;
//# sourceMappingURL=index.route.js.map