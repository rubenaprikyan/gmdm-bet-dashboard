'use client';
import * as React from 'react';
import * as Yup from 'yup';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormLabel } from '@/components/ui/form';
import { SportEvent } from '@/api/models/sport-event.model';

import CustomFormField from '@/components/CustomFormField';
import { PlaceBetSchema } from '@/app/sport/schemas';
import { usePlaceBet } from '@/hooks/mutations/sport/bet';
import { toast } from 'sonner';
import { BaseApiErrorResponse } from '@/api/view-models';

export interface IMockBetSlipProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  event: SportEvent;
}

type FormState = Yup.InferType<typeof PlaceBetSchema>;

function MockBetSlip({ isOpen, setIsOpen, event }: IMockBetSlipProps) {
  const form = useForm<FormState>({
    mode: 'onChange',
    resolver: yupResolver(PlaceBetSchema),
    defaultValues: {
      betAmount: 0,
    },
  });

  const { mutate, isPending } = usePlaceBet({
    onSuccess: () => {
      toast.success('Bet placed successfully', {
        duration: 2000,
      });

      setIsOpen(false);
    },
    onError: (error: void) => {
      // TODO test error handling properly
      const err = error as unknown as BaseApiErrorResponse;
      toast.error(err.error.details?.message);
    },
  });

  const onSubmit = (fileds: FieldValues) => {
    mutate({
      eventId: event?.id,
      amount: fileds.betAmount,
    });
  };

  const winAmount = (event?.odds * form.watch('betAmount') || 0).toFixed(2);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
      <DialogContent className='py-4 top-[25%]'>
        <DialogHeader>
          <DialogTitle>
            {event?.event_name} - x{event?.odds}
          </DialogTitle>
        </DialogHeader>
        <Form form={form} onSubmit={onSubmit}>
          <CustomFormField
            name='betAmount'
            labelText='Bet Amount'
            renderController={({ field }) => (
              <Input
                {...field}
                disabled={isPending}
                type='number'
                min={100}
                max={10000}
                placeholder='Enter bet amount'
              />
            )}
          />
          <div className='flex w-full justify-end my-6'>
            <FormLabel className='text-md text-green-500'>
              You Win - {winAmount}
            </FormLabel>
          </div>
          <DialogFooter>
            <Button
              variant='outline'
              type='button'
              onClick={() => setIsOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={isPending}>
              Place Bet
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

MockBetSlip.displayName = 'MockBetSlip';

export default MockBetSlip;
