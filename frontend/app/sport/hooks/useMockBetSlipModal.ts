'use client';

import { useState } from 'react';
import { SportEvent } from '@/api/models/sport-event.model';

function useMockBetSlipModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<SportEvent | null>(null);

  const handleModalState = (value: boolean) => setIsOpen(value);

  const handleBetClick = (event: SportEvent) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  return { isOpen, selectedEvent, setIsOpen: handleModalState, handleBetClick };
}

export default useMockBetSlipModal;
