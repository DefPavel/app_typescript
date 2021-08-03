"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
require("dotenv/config");
const app_1 = require("./app");
//import AuthRoute from '@routes/auth.route';
const index_route_1 = require("./routes/index.route");
// Записываем роуты 
const app = new app_1.default([new index_route_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map