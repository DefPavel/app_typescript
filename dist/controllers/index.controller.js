"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res) => {
            try {
                const title = 'Добро пожаловать';
                const users = [
                    {
                        id: 1,
                        name: 'Ali'
                    },
                    {
                        id: 2,
                        name: 'Can'
                    },
                    {
                        id: 3,
                        name: 'Ahmet'
                    }
                ];
                res.render('home/index', { title, users });
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map