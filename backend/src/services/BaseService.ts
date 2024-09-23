/**
 * Base service class
 * More similar to Repository,
 *  just currently using Prisma which is unnecessary to create extra layer as repository
 */
abstract class BaseService {
  /**
   * Returns all entities
   *
   * @param query
   * @protected
   */
  protected abstract _findAndCountAll(query: unknown): Promise<[unknown[], number]>;
}

export default BaseService;
