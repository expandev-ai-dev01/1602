/**
 * @summary
 * Helper functions for standardized API responses
 *
 * @module middleware/crud
 */

/**
 * @summary
 * Creates a success response object
 *
 * @param {any} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {object} Success response object
 */
export function successResponse(data: any, metadata?: any) {
  return {
    success: true,
    data,
    ...(metadata && { metadata: { ...metadata, timestamp: new Date().toISOString() } }),
  };
}

/**
 * @summary
 * Creates an error response object
 *
 * @param {string} message - Error message
 * @param {string} code - Error code
 *
 * @returns {object} Error response object
 */
export function errorResponse(message: string, code: string = 'ERROR') {
  return {
    success: false,
    error: {
      code,
      message,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary
 * General error object for unhandled errors
 */
export const StatusGeneralError = {
  statusCode: 500,
  code: 'INTERNAL_ERROR',
  message: 'An unexpected error occurred',
};
