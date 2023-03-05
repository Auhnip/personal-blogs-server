import Router from 'koa-router';
import BlogsServer from '../models/blogs';

const baseApi = '/articles';

const router = new Router();
router.get(`${baseApi}/metadata/all`, async (context) => {
  context.body = await BlogsServer.allMetadata();
});

export default router;
