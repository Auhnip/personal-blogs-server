import Router from 'koa-router';
import BlogsServer from '../models/blogs';

const baseApi = '/articles';

const router = new Router();

router.get(`${baseApi}/metadata/all`, async (context) => {
  const data = await BlogsServer.allMetadata();
  context.body = data;
});

router.get(`${baseApi}/content/all`, async (context) => {
  const data = await BlogsServer.allContent();
  context.body = data;
});

router.post(`${baseApi}/content/id`, async (context) => {
  const { id } = context.request.body as { id: number };
  const data = await BlogsServer.getContentById(id);
  context.body = data;
});

export default router;
