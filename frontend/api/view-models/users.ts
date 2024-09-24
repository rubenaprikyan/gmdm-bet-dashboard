import { User } from '@/api/models/user.model';

export type LoginSuccessViewModel = {
  user: User;
  access_token: string;
};
