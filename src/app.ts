process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

//import cookieParser from 'cookie-parser';
import * as express from 'express'
//import knex from '@databases';
import { Routes } from './interfaces/routes.interface';
import errorMiddleware500 from './middleware/error500.middleware';
import errorMiddleware404 from './middleware/error404.middleware';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'dev';

    //this.connectToDatabase(); // Соединение с БД в будущем
    this.initializeTemplate(); // Инициализация шаблона
    this.initializeAssets()   // Инициализация статических файлов
    this.initializeMiddlewares(); // Инициализация middleware
    this.initializeRoutes(routes); // Инициализация routes
    this.initializeErrorHandling(); // Инициализация middleware ошибок

  }

  public listen() {
    this.app.listen(this.port, () => {
     console.log(`ENV: ${this.env}`);
     console.log(`App listening on the http://localhost:${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  /*private connectToDatabase() {
    Model.knex(knex);
  }*/

  // Указываем путь статических файлов
  private initializeAssets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }
  // Подключаем шаблонизатор pug
  private initializeTemplate() {
        this.app.set('view engine', 'pug')
    }
  // 
  private initializeMiddlewares() {

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    //this.app.use(cookieParser());
  }
  // Подключение массивов роутеров
  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  // Подключение middleware ошибок
  private initializeErrorHandling() {
    this.app.use(errorMiddleware404);// Ошибка 404
    this.app.use(errorMiddleware500);// Ошибка 500
  }
}

export default App;
