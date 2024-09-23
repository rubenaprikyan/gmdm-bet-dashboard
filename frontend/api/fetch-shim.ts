// use when dealing with server and client switches
// import 'isomorphic-fetch';

import { API_URL } from '@/config';

export default async function fetchShim<T>(
  input: URL | RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  const res = await fetch(`${API_URL}${input}`, init);
  return res.json();
}
