import * as Yup from 'yup';
import { ERROR_MESSAGES } from '@/lib/constants';

export const PlaceBetSchema = Yup.object().shape({
  betAmount: Yup.number()
    .transform((value) => (isNaN(value) ? 0 : value))
    .positive('Bet amount must be positive')
    .required(ERROR_MESSAGES.FIELD_IS_REQUIRED('Bet amount'))
    // TODO use min and max from platform limits instead of using fixed amount
    .min(100, 'Minimum bet amount is 100')
    .max(10000, 'Maximum bet amount is 10000'),
});
