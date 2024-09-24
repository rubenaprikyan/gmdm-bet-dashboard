import { BaseModel } from '@/api/models/BaseModel';

export interface SportEvent extends BaseModel {
  event_id: string;
  event_name: string;

  odds: number;

  createdAt: string;
  updatedAt: string;
}
