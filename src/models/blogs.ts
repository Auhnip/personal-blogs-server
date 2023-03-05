import knex from 'knex';
import Database from './database';

class BlogsServer {
  // static async queryByCreateTime(start: Date, end: Date) {
  //   const blogs = await Database.select('id').from('blogs');
  //   return blogs;
  // }

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
    const result = await Database.select().from('blogs_metadata')
    return result
  }
}

export default BlogsServer;
