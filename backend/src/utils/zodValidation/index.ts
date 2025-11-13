import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas and utilities
 *
 * @module utils/zodValidation
 */

// String validations
export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

// Name validations
export const zName = z.string().min(1).max(200);
export const zNullableDescription = z.string().max(500).nullable();

// Numeric validations
export const zFK = z.coerce.number().int().positive();
export const zNullableFK = z.coerce.number().int().positive().nullable();
export const zBit = z.coerce.number().int().min(0).max(1);

// Date validations
export const zDateString = z.string().datetime();
export const zNullableDateString = z.string().datetime().nullable();

// Email validation
export const zEmail = z.string().email().max(255);

// Phone validation
export const zPhone = z.string().max(20).nullable();
