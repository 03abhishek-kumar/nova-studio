import { Pool } from 'pg';

const pool = global.pgPool || new Pool({
  connectionString: process.env.DATABASE_URL,
});

// NODE_ENV have two values production and development so we are checking if it is in development store the connection globally so that nextjs can use it after reloads
if (process.env.NODE_ENV !== 'production') {
  global.pgPool = pool;
}

export default pool;