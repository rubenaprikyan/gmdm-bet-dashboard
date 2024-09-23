import { BaseModel } from '@/api/models/BaseModel';

export interface SportEvent extends BaseModel {
  id: string;
  name: string;
  description: string;
  sourcesCount: number;

  creatorId: string;
  collectionId?: string;

  createdAt: string;
  updatedAt: string;
}
