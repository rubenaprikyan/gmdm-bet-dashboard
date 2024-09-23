import * as Yup from 'yup';

export const PlaceBetSchema = Yup.object().shape({
  betAmount: Yup.number()
    .transform((value) => (isNaN(value) ? 0 : value))
    .positive('Bet amount must be positive')
    .required('Bet amount is required')
    // TODO use min and max from platform limits instead of using fixed amount
    .min(100, 'Minimum bet amount is 100')
    .max(10000, 'Maximum bet amount is 10000'),
});
