# 个人博客后端

## 概况

使用 `koa` 框架搭建，数据库部分使用 `mysql` ，通过 `knex.js` 进行数据库连接管理。使用 `typescript` 编写。

## 配置

在根目录下通过 `sql_config.ts` 导出配置对象进行数据库连接的配置：

```typescript
import { Knex } from 'knex';

export default {
  connection: {
    // 数据库服务器地址
    host: 'xxx.xxx.xxx.xxx',
    // 端口号
    port: 3306,
    // 用户名
    user: 'user_name',
    // 密码
    password: 'password',
    // 待连接数据库
    database: 'database_name',
  },
} as Knex.Config;
```
