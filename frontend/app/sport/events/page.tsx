'use client';

import * as React from 'react';

import { useEvents } from '@/hooks/queries/sport/events';

function SportEvents() {
  const { data, isLoading } = useEvents(100);

  const events = React.useMemo(() => data?.pages?.flat() || [], [data]);

  return (
    <div className='container'>
      {isLoading && <div>Loading sports</div>}
      {events.length && JSON.stringify(events)}
    </div>
  );
}

export default SportEvents;
