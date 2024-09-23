/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiListViewModel, BaseViewModel } from '../types';

/**
 * Base Controller includes utilities for controllers
 * @abstract
 */
abstract class BaseController {
  /**
   * view
   * returns unified response object
   * {
   *   data: <the actual response>
   * }
   * @param result
   * @protected
   */
  protected resourceView<T = any>(result: T): BaseViewModel<T> {
    return {
      data: result,
    };
  }

  protected listView<T = any>(
    result: T[],
    total: number,
    skip: number,
    take: number,
  ): ApiListViewModel<T> {
    return {
      data: result,
      pagination: {
        total,
        skip,
        take,
      },
    };
  }
}

export default BaseController;
