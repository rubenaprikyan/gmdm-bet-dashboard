import BaseController from './BaseController';
import { DataSource } from '@/database/data-source';
import UserService from '@/services/UserService';

import { Context } from '@/types';
import { LoginDto } from '@/controllers/dtos/users';

class UsersController extends BaseController {
  private userService: UserService;
  constructor(private dataSource: DataSource) {
    super();

    this.userService = new UserService(dataSource);
  }

  /**
   * Login
   * @param ctx - Context
   */
  async login(ctx: Context) {
    const transformedBody = await LoginDto.validateAndReturn(ctx.req.body);

    const result = await this.userService.login(
      transformedBody.email,
      transformedBody.password,
    );

    return {
      view: this.resourceView(result),
      statusCode: 200,
    };
  }
}

export default UsersController;
