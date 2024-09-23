import endpoints from '@/api/endpoints';

import { useInfiniteQuery } from '@tanstack/react-query';

import EventsApi from '@/api/EventsApi';

function useEvents(limit: number) {
  return useInfiniteQuery({
    // using the api endpoint as store key
    queryKey: [endpoints.events.all()],
    queryFn: async ({ pageParam }) => {
      if (pageParam !== undefined) {
        const response = await EventsApi.getAll(pageParam, limit);
        return response.data;
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: any, pages, lastPageParam: number) => {
      if (lastPage.length < limit) return undefined;
      return lastPageParam + limit;
    },
  });
}

export default useEvents;
