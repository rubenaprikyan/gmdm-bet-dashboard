import * as React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SportEvent } from '@/api/models/sport-event.model';
import { Skeleton } from '@/components/ui/skeleton';

export type IEventProps = {
  event: SportEvent;
  handleBet: (event: SportEvent) => void;
};

export const SkeletonEventCard = () => (
  <Card className='overflow-hidden'>
    <CardHeader>
      <Skeleton className='h-4 w-3/4' />
    </CardHeader>
    <CardContent className='p-4'>
      <div className='p-1.5'>
        <Skeleton className='h-8 w-1/4' />
      </div>
    </CardContent>
  </Card>
);

SkeletonEventCard.displayName = 'SkeletonEventCard';

function EventCard({ event, handleBet }: IEventProps) {
  return (
    <Card key={event.id} className='overflow-hidden'>
      <CardHeader className=''>
        <CardTitle className='text-md'>
          {event.event_name} - : x{event.odds}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        <Button onClick={() => handleBet(event)} className=''>
          Place Bet
        </Button>
      </CardContent>
    </Card>
  );
}

EventCard.displayName = 'EventCard';

export default EventCard;
