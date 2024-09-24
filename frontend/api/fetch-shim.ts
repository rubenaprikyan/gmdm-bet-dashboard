// use when dealing with server and client switches
// import 'isomorphic-fetch';
'use client';

import { API_URL } from '@/config';
import { BaseError } from '@/api/view-models';

/**
 * Fetch shim to handle api requests
 * Designed to act as a facade for fetch
 * Base operations need to be done inside this functions, like setting headers, handling errors, etc
 * @param input
 * @param init
 */
export default async function fetchShim<T>(
  input: URL | RequestInfo,
  init?: RequestInit | undefined
  // TODO change any to BaseError
): Promise<T | any> {
  const token = localStorage.getItem('access_token');

  try {
    const res = await fetch(`${API_URL}${input}`, {
      ...init,
      headers: {
        // can be edited by init
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),

        ...init?.headers,
      },
    });

    const resJson = await res.json();

    // the api returns a status codes following to rest principles
    // 2xx for success
    if (res.status >= 200 && res.status <= 299) {
      return resJson;
    }

    // 4xx for client errors
    if (res.status >= 400 && res.status <= 499) {
      throw new BaseError(
        resJson.error.details,
        resJson.error.message,
        resJson.error.statusCode
      );
    }
  } catch (error) {
    // TODO add better handling here
    throw error;
  }
}
