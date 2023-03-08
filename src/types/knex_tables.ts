import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface BlogsMetadata {
    id: number;
    title: string;
    description: string;
    create_at: Date;
    update_at: Date;
  }

  interface BlogsContent {
    id: number;
    content: string;
  }

  interface Tables {
    // This is same as specifying `knex<User>('users')`
    // blogs: Blogs;

    // For more advanced types, you can specify separate type
    // for base model, "insert" type and "update" type.
    // But first: notice that if you choose to use this,
    // the basic typing showed above can be ignored.
    // So, this is like specifying
    //    knex
    //    .insert<{ name: string }>({ name: 'name' })
    //    .into<{ name: string, id: number }>('users')
    ['blogs_metadata']: Knex.CompositeTableType<
      // This interface will be used for return type and
      // `where`, `having` etc where full type is required
      BlogsMetadata,
      // Specifying "insert" type will also make sure
      // data matches interface in full. Meaning
      // if interface is `{ a: string, b: string }`,
      // `insert({ a: '' })` will complain about missing fields.
      Omit<BlogsMetadata, 'id' | 'description'> &
        Partial<Pick<BlogsMetadata, 'description'>>,
      // This interface is used for "update()" calls.
      // As opposed to regular specifying interface only once,
      // when specifying separate update interface, user will be
      // required to match it  exactly. So it's recommended to
      // provide partial interfaces for "update". Unless you want to always
      // require some field (e.g., `Partial<User> & { updated_at: string }`
      // will allow updating any field for User but require updated_at to be
      // always provided as well.
      //
      // For example, this wil allow updating all fields except "id".
      // "id" will still be usable for `where` clauses so
      //      knex('users_composite')
      //      .update({ name: 'name2' })
      //      .where('id', 10)`
      // will still work.
      // Defaults to Partial "insert" type
      Partial<Omit<BlogsMetadata, 'id'>>
    >;

    ['blogs_content']: Knex.CompositeTableType<
      // full type
      BlogsContent,
      // insert type
      Partial<Pick<BlogsContent, 'content'>>,
      // update type
      Partial<Omit<BlogsContent, 'id'>>
    >;
  }
}
