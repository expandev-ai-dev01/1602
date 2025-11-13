import sql from 'mssql';
import { getPool } from './connection';
import { IRecordSet } from './types';

/**
 * @summary
 * Enum for expected return types from database operations
 *
 * @enum ExpectedReturn
 * @module utils/database
 */
export enum ExpectedReturn {
  None = 'None',
  Single = 'Single',
  Multi = 'Multi',
}

/**
 * @summary
 * Executes a database stored procedure with parameters
 *
 * @function dbRequest
 * @module utils/database
 *
 * @param {string} routine - Stored procedure name
 * @param {object} parameters - Procedure parameters
 * @param {ExpectedReturn} expectedReturn - Expected return type
 * @param {sql.Transaction} transaction - Optional transaction
 * @param {string[]} resultSetNames - Optional result set names
 *
 * @returns {Promise<any>} Query results
 *
 * @throws {Error} When database operation fails
 */
export async function dbRequest(
  routine: string,
  parameters: any = {},
  expectedReturn: ExpectedReturn = ExpectedReturn.Single,
  transaction?: sql.Transaction,
  resultSetNames?: string[]
): Promise<any> {
  const pool = await getPool();
  const request = transaction ? new sql.Request(transaction) : pool.request();

  // Add parameters to request
  Object.keys(parameters).forEach((key) => {
    request.input(key, parameters[key]);
  });

  // Execute stored procedure
  const result = await request.execute(routine);

  // Process results based on expected return type
  switch (expectedReturn) {
    case ExpectedReturn.None:
      return null;

    case ExpectedReturn.Single:
      return result.recordset;

    case ExpectedReturn.Multi:
      if (resultSetNames && resultSetNames.length > 0) {
        const namedResults: { [key: string]: IRecordSet<any> } = {};
        resultSetNames.forEach((name, index) => {
          namedResults[name] = result.recordsets[index];
        });
        return namedResults;
      }
      return result.recordsets;

    default:
      return result.recordset;
  }
}

/**
 * @summary
 * Begins a database transaction
 *
 * @function beginTransaction
 * @module utils/database
 *
 * @returns {Promise<sql.Transaction>} Transaction object
 */
export async function beginTransaction(): Promise<sql.Transaction> {
  const pool = await getPool();
  const transaction = new sql.Transaction(pool);
  await transaction.begin();
  return transaction;
}

/**
 * @summary
 * Commits a database transaction
 *
 * @function commitTransaction
 * @module utils/database
 *
 * @param {sql.Transaction} transaction - Transaction to commit
 *
 * @returns {Promise<void>}
 */
export async function commitTransaction(transaction: sql.Transaction): Promise<void> {
  await transaction.commit();
}

/**
 * @summary
 * Rolls back a database transaction
 *
 * @function rollbackTransaction
 * @module utils/database
 *
 * @param {sql.Transaction} transaction - Transaction to rollback
 *
 * @returns {Promise<void>}
 */
export async function rollbackTransaction(transaction: sql.Transaction): Promise<void> {
  await transaction.rollback();
}
