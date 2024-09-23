import { DataSource } from '@/database/data-source';
import { SportEvent } from '@/database/entities';
import { PAGINATION } from '@/config/constants';
import { BaseListRequestArgs, ServiceBaseListResponse } from '@/types';
import { Order } from '@/config/enums';
import BaseService from '@/services/BaseService';

class SportsEventService extends BaseService {
  constructor(private dataSource: DataSource) {
    super();
  }

  /**
   * Returns all sports events
   * @param {BaseListRequestArgs} args - accepts take and skip
   * @returns {Promise<SportEvent[]>} - returns a list of sports events and count
   */
  public async getEvents({
    take = PAGINATION.TAKE,
    skip = PAGINATION.SKIP,
  }: BaseListRequestArgs): ServiceBaseListResponse<SportEvent> {
    const [data, count] = await this._findAndCountAll({
      take,
      skip,
      orderBy: {
        createdAt: Order.DESC,
      },
    });

    return { data, count, skip, take };
  }

  /**
   * Returns sports event by id
   * @param {any} query
   * @returns {Promise<[SportsEvens[], number]>}
   *  - returns a list of sportsEvent and total count
   */
  protected async _findAndCountAll(query: any): Promise<[SportEvent[], number]> {
    return this.dataSource.$transaction([
      this.dataSource.sportEvent.findMany(query),
      this.dataSource.sportEvent.count(query),
    ]);
  }
}

export default SportsEventService;
