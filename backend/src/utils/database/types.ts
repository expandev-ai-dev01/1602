/**
 * @summary
 * Database utility type definitions
 *
 * @module utils/database
 */

/**
 * @interface IRecordSet
 * @description Generic record set interface for database results
 *
 * @property {T[]} records - Array of records
 */
export interface IRecordSet<T> extends Array<T> {}

/**
 * @interface ICreateObjectResult
 * @description Standard result for object creation operations
 *
 * @property {number} id - Created object identifier
 */
export interface ICreateObjectResult {
  id: number;
}
