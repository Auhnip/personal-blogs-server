import Koa from 'koa';
import cors from '@koa/cors';
import articlesRouter from './src/routers/articles';
import bodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';

const app = new Koa();

// logger
app.use(koaLogger());

// cors
app.use(cors({ credentials: true }));

// parse json body
app.use(bodyParser());

// use router
app.use(articlesRouter.routes());
app.use(articlesRouter.allowedMethods());

app.listen(8080);

console.log('Server started at 8080');
