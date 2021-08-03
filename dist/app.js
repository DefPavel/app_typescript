"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
//import cookieParser from 'cookie-parser';
const express = require("express");
const error500_middleware_1 = require("./middleware/error500.middleware");
const error404_middleware_1 = require("./middleware/error404.middleware");
class App {
    constructor(routes) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'dev';
        //this.connectToDatabase(); // Соединение с БД в будущем
        this.initializeTemplate(); // Инициализация шаблона
        this.initializeAssets(); // Инициализация статических файлов
        this.initializeMiddlewares(); // Инициализация middleware
        this.initializeRoutes(routes); // Инициализация routes
        this.initializeErrorHandling(); // Инициализация middleware ошибок
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`ENV: ${this.env}`);
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
    getServer() {
        return this.app;
    }
    /*private connectToDatabase() {
      Model.knex(knex);
    }*/
    // Указываем путь статических файлов
    initializeAssets() {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    }
    // Подключаем шаблонизатор pug
    initializeTemplate() {
        this.app.set('view engine', 'pug');
    }
    // 
    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        //this.app.use(cookieParser());
    }
    // Подключение массивов роутеров
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
    // Подключение middleware ошибок
    initializeErrorHandling() {
        this.app.use(error404_middleware_1.default); // Ошибка 404
        this.app.use(error500_middleware_1.default); // Ошибка 500
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map