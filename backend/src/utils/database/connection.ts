import sql from 'mssql';
import { config } from '@/config';

let pool: sql.ConnectionPool | null = null;

/**
 * @summary
 * Gets or creates a database connection pool
 *
 * @function getPool
 * @module utils/database
 *
 * @returns {Promise<sql.ConnectionPool>} Database connection pool
 *
 * @throws {Error} When connection fails
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(config.database);
    console.log('Database connection pool created');
  }
  return pool;
}

/**
 * @summary
 * Closes the database connection pool
 *
 * @function closePool
 * @module utils/database
 *
 * @returns {Promise<void>}
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
    console.log('Database connection pool closed');
  }
}
