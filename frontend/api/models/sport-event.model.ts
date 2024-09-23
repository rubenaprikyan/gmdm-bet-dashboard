import { BaseModel } from '@/api/models/BaseModel';

export interface SportEvent extends BaseModel {
  id: string;

  name: string;
  odds: number;

  createdAt: string;
  updatedAt: string;
}
