function createEndpoint(postfix: string[] | string): string {
  if (Array.isArray(postfix)) {
    return `/api/${postfix.join('/')}`;
  }

  return `/api/${postfix}`;
}

const endpoints: Record<string, Record<string, (...args: any) => string>> = {
  events: {
    all: (skip: string, take: string) =>
      `${createEndpoint('events')}?skip=${skip}&take=${take}`,
    single: (id: string) => createEndpoint(['events', id]),
  },
};

export default endpoints;

export { createEndpoint };
