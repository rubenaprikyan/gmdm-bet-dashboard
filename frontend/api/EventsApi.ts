import fetShim from '@/api/fetch-shim';

import endpoints from '@/api/endpoints';

import { ApiListViewModel } from '@/api/view-models';
import { SportEvent } from '@/api/models/sport-event.model';

class EventsApi {
  static getAll(pageParam: number, take: number) {
    return fetShim<ApiListViewModel<SportEvent>>(
      `${endpoints.events.all(pageParam, take)}`
    );
  }
}

export default EventsApi;
