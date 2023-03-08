import Router from '@koa/router';
import BlogsServer from '../models/blogs_server';

const baseApi = '/articles';

const router = new Router();

router.get(`${baseApi}/metadata/all`, async (context) => {
  const data = await BlogsServer.allMetadata();
  context.body = data;
});

router.post(`${baseApi}/metadata/update`, async (context) => {
  const { id, ...props } = context.request.body as {
    id: number;
    [index: string]: unknown;
  };
  const data = await BlogsServer.updateMetadata(id, props);
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

router.post(`${baseApi}/content/update`, async (context) => {
  const { id, content } = context.request.body as {
    id: number;
    content: string;
  };
  const data = await BlogsServer.updateContent(id, content);
  context.body = data;
});

router.get(`${baseApi}/id`, async (context) => {
  const { id } = context.query as { id: string };
  const data = await BlogsServer.getBlogById(Number(id));
  context.body = data;
});

export default router;
