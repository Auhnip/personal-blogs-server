import { BlogsMetadata } from 'knex/types/tables';
import Database from './database';

const successObj = (result: any) => ({ type: 'success', result } as const);
const failedObj = (message: string, reason?: any) =>
  ({
    type: 'failed',
    message,
    reason,
  } as const);

class BlogsServer {
  // static async queryCreateTimeList() {
  //   const createTimes = await Database.select(
  //     Database.raw('DATE(create_at) as date')
  //   )
  //     .count('id', { as: 'article_count' })
  //     .from('blogs')
  //     .groupByRaw('DATE(create_date)')
  //     .orderBy('date', 'desc');
  //   return createTimes;
  // }

  static async allMetadata() {
    return await Database.select()
      .from('blogs_metadata')
      .then(
        (result) => successObj(result),
        (reason) => failedObj('rejected', reason)
      );
  }

  static async allContent() {
    return await Database.select()
      .from('blogs_content')
      .then(
        (result) => successObj(result),
        (reason) => failedObj('rejected', reason)
      );
  }

  static async getContentById(id: number) {
    return await Database.select()
      .from('blogs_content')
      .where('id', id)
      .then(
        (result) =>
          result.length !== 1 ? failedObj('result error') : successObj(result[0]),
        (reason) => failedObj('rejected', reason)
      );
  }

  static async updateContent(id: number, content: string) {
    return Database.from('blogs_content')
      .where('id', id)
      .update({ content })
      .then((result) => successObj(result))
      .catch((reason) => failedObj('rejected', reason));
  }

  static async updateMetadata(
    id: number,
    metadata: Partial<Omit<BlogsMetadata, 'id'>>
  ) {
    return Database.from('blogs_metadata')
      .where('id', id)
      .update(metadata)
      .then(
        (result) => successObj(result),
        (reason) => failedObj('rejected', reason)
      );
  }
}

export default BlogsServer;
