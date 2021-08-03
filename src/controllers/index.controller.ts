import { Request, Response } from 'express';

class IndexController {

    public index = (req: Request, res: Response): void => {
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
        
            res.render('home/index', { title , users });
        }
        catch (error) {
        }
    
    };
}
export default IndexController;

