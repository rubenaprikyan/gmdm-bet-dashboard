import fetShim from '@/api/fetch-shim';

import { ApiResourceViewModel } from '@/api/view-models';
import { LoginSuccessViewModel } from '@/api/view-models/users';

import endpoints from '@/api/endpoints';

export type LoginParams = {
  email: string;
  password: string;
};

class UsersApi {
  static login(params: LoginParams) {
    return fetShim<ApiResourceViewModel<LoginSuccessViewModel>>(
      endpoints.users.login(),
      {
        method: 'POST',
        body: JSON.stringify(params),
      }
    );
  }
}

export default UsersApi;

export { type LoginSuccessViewModel };
