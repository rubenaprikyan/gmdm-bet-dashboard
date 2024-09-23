export interface BaseApiSuccessResponse {
  data: any;
  meta?: any;
}

export interface BaseApiErrorResponse {
  error: {
    message: string;
    details?: any;
  };
  meta?: any;
}

export interface ApiListViewModel<TData> extends BaseApiSuccessResponse {
  data: TData[];
  pagination: {
    total: number;
    skip: number;
    take: number;
  };
}

export interface ApiResourceViewModel<TData>
  extends BaseApiSuccessResponse,
    BaseApiErrorResponse {
  data: TData;
}
