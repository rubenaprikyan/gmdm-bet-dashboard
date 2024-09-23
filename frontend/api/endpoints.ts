function createEndpoint(postfix: string[] | string): string {
  if (Array.isArray(postfix)) {
    return `/api/${postfix.join('/')}`;
  }

  return `/api/${postfix}`;
}

const endpoints: Record<string, Record<string, (...args: any) => string>> = {
  events: {
    all: () => createEndpoint('events'),
    single: (id: string) => createEndpoint(['events', id]),
  },
};

export default endpoints;

export { createEndpoint };
