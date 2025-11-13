import { Request } from 'express';
import { z } from 'zod';

/**
 * @summary
 * CRUD controller for handling common CRUD operations with validation
 *
 * @class CrudController
 * @module middleware/crud
 */
export class CrudController {
  private permissions: Array<{ securable: string; permission: string }>;

  constructor(permissions: Array<{ securable: string; permission: string }>) {
    this.permissions = permissions;
  }

  /**
   * @summary
   * Validates request for CREATE operations
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[any, any]>} Tuple of [validated data, error]
   */
  async create(req: Request, schema: z.ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync(req.body);
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary
   * Validates request for READ operations
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[any, any]>} Tuple of [validated data, error]
   */
  async read(req: Request, schema: z.ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync(req.params);
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary
   * Validates request for UPDATE operations
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[any, any]>} Tuple of [validated data, error]
   */
  async update(req: Request, schema: z.ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync({ ...req.params, ...req.body });
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary
   * Validates request for DELETE operations
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[any, any]>} Tuple of [validated data, error]
   */
  async delete(req: Request, schema: z.ZodSchema): Promise<[any, any]> {
    try {
      const validated = await schema.parseAsync(req.params);
      return [{ credential: {}, params: validated }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * @summary
   * Validates request for LIST operations
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   *
   * @returns {Promise<[any, any]>} Tuple of [validated data, error]
   */
  async list(req: Request, schema?: z.ZodSchema): Promise<[any, any]> {
    try {
      if (schema) {
        const validated = await schema.parseAsync(req.query);
        return [{ credential: {}, params: validated }, null];
      }
      return [{ credential: {}, params: req.query }, null];
    } catch (error) {
      return [null, error];
    }
  }
}
