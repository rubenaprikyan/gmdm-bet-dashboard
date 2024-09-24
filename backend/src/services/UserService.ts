import { DataSource } from '@/database/data-source';

import BaseService from '@/services/BaseService';
import AuthService from '@/services/AuthService';
import { BadRequest } from '@/modules/exceptions';

class UserService extends BaseService {
  constructor(private dataSource: DataSource) {
    super();
  }

  async login(email: string, password: string) {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new BadRequest('Invalid Email or Password');
    }

    const isPasswordMatch = AuthService.comparePasswordHashes(password, user.password);

    if (!isPasswordMatch) {
      throw new BadRequest('Invalid Email or Password');
    }

    const payload = {
      salt: user.accessTokenSalt!,
      email: user.email!,
    };

    return {
      access_token: AuthService.generateAuthToken(payload),
      // TODO - omit sensitive data, password etc.
      user,
    };
  }

  findByEmail(email: string) {
    return this.dataSource.user.findUnique({ where: { email } });
  }

  async _findAndCountAll(query: any) {
    return this.dataSource.$transaction([
      this.dataSource.user.findMany(query),
      this.dataSource.user.count(query),
    ]);
  }
}

export default UserService;
