process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from './app';
//import AuthRoute from '@routes/auth.route';
import IndexRoute from './routes/index.route';

// Записываем роуты 
const app = new App([new IndexRoute()]);

app.listen();
