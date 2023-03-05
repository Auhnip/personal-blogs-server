import Koa from 'koa';
import cors from '@koa/cors';
import articlesRouter from './src/controller/articles';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

// cors
app.use(cors({ credentials: true }));

// parse json body
app.use(bodyParser())

// use router
app.use(articlesRouter.routes());

app.listen(8080);

console.log('Server started at 8080');
