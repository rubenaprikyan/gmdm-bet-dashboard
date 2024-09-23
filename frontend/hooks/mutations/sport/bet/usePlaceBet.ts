'use client';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { noop } from '@/lib/utils';

// TODO import BetApi, { PlaceBetParams } from '@/api/BetApi';
type Bet = {
  id: string;
  amount: number;
  eventId: string;
  userId: string;
  // ... other fields
};

type PlaceBetParams = {
  amount: number;
  eventId: string;
};

type UsePlaceBetProps = Omit<
  UseMutationOptions<Bet, void, PlaceBetParams>,
  'mutationKey' | 'mutationFn'
>;

function usePlaceBet({
  onSettled = noop,
  onError = noop,
  ...rest
}: UsePlaceBetProps) {
  return useMutation({
    mutationKey: ['placeBet'],
    mutationFn: (bet) => {
      // TODO use real api to place bet
      // TODO add platform specific delay here
      // const response = await BetApi.placeBet(event, amount);
      // return response.data;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(bet as any);
        }, 1000);
      });
    },
    onSettled: (bet, error, ...params) => {
      if (bet) {
        // TODO insert bet into bet history to have it updated locally
      }
      onSettled?.(bet, error, ...params);
    },
    onError,
    ...rest,
  });
}

export default usePlaceBet;
