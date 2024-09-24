import { BaseModel } from '@/api/models/BaseModel';

export interface User extends BaseModel {
  id: string;

  email: string;

  createdAt: string;
  updatedAt: string;
}
