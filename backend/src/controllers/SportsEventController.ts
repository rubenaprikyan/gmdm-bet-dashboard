import BaseController from './BaseController';
import SportsEventService from '@/services/SportsEventService';
import { DataSource } from '@/database/data-source';
import { Context } from '@/types';

class SportsEventController extends BaseController {
  private sportsEventService: SportsEventService;
  constructor(private dataSource: DataSource) {
    super();

    this.sportsEventService = new SportsEventService(dataSource);
  }

  /**
   * Get all sports events
   * @param ctx - Context
   */
  async getAll(ctx: Context) {
    const { take, skip } = ctx.req.query;

    const result = await this.sportsEventService.getEvents({
      take: parseInt(take as string, 10),
      skip: parseInt(skip as string, 10),
    });

    return {
      view: this.listView(result.data, result.count, result.skip, result.take),
      statusCode: 200,
    };
  }
}

export default SportsEventController;
