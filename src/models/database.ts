import Knex from 'knex';
import connection from '../../sql_config';

export default Knex({
  client: 'mysql',
  connection,
  log: {
    warn(msg: string) {
      console.log(`[warn] ${msg}`);
    },
    error(msg: string) {
      console.log(`[error] ${msg}`);
    },
    deprecate(msg: string) {
      console.log(`[deprecate] ${msg}`);
    },
  },
});
