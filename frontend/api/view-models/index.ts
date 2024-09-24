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

export class BaseError extends Error {
  constructor(
    public details: any,
    public message: string,
    public statusCode: number
  ) {
    super(message);
  }

  public getError() {
    return {
      message: this.message,
      details: this.details,
      statusCode: this.statusCode,
    };
  }
}
