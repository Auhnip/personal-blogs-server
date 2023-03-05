import Koa from 'koa';
import cors from '@koa/cors';
import articlesRouter from './src/controller/articles';

const app = new Koa();

app.use(cors({ credentials: true }));

app.use(articlesRouter.routes());

app.listen(8080);

console.log('Server started at 8080');
