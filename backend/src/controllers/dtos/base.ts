import { IsInt, Min, Max, validateOrReject } from 'class-validator';
import { plainToClass, Type } from 'class-transformer';
import { ValidationError } from '@/modules/exceptions';
import { PAGINATION } from '@/config/constants';

export class PaginationDto {
  @IsInt()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  take: number = PAGINATION.TAKE;

  @IsInt()
  @Min(0)
  @Type(() => Number)
  skip: number = PAGINATION.SKIP;

  static async validateAndReturn(query: Record<string, unknown>) {
    const queryObject: PaginationDto = plainToClass(PaginationDto, query);

    try {
      await validateOrReject(queryObject);

      return queryObject;
    } catch (e: any) {
      throw new ValidationError(ValidationError.getClassValidatorValidationErrors(e));
    }
  }
}
