'use client';

import * as React from 'react';
import EventCard, { SkeletonEventCard } from '@/app/sport/components/EventCard';
import MockBetSlip from '@/app/sport/components/MockBetSlip';
import useMockBetSlipModal from '@/app/sport/hooks/useMockBetSlipModal';

import { useEvents } from '@/hooks/queries/sport/events';

function EventsList() {
  const { data, isLoading, error } = useEvents(100);
  const { selectedEvent, setIsOpen, isOpen, handleBetClick } =
    useMockBetSlipModal();

  // infinite query returns pages, need to flat to render without nested arrays
  const events = React.useMemo(() => data?.pages?.flat() || [], [data]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Sport Events</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {isLoading
          ? Array(12)
              .fill(null)
              .map((_, i) => <SkeletonEventCard key={i} />)
          : null}

        {!isLoading && events.length
          ? events.map((event) => (
              <EventCard
                event={event}
                handleBet={handleBetClick}
                key={event.id}
              />
            ))
          : 'No events found'}

        {error && <div>Something Went Wrong</div>}
      </div>

      <MockBetSlip
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        event={selectedEvent!}
      />
    </div>
  );
}

export default EventsList;
