"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const objection_1 = require("objection");
//import { User } from '@interfaces/users.interface';
class Users extends objection_1.Model {
}
exports.Users = Users;
Users.tableName = 'users'; // database table name
Users.idColumn = 'id'; // id column name
//# sourceMappingURL=users.model.js.map