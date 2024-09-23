import { whiteList } from '../config';
import { BadRequest } from '../modules/exceptions';

export const crossOrigin = (
  origin: string,
  callback: (err: Error | null, origin?: unknown) => void,
) => {
  if (
    process.env.CORS_WHITE_LIST === '*' ||
    whiteList.split(',').includes(origin as string)
  ) {
    // Allow all or whitelisted origins
    callback(null, true);
  } else {
    callback(
      new BadRequest({
        message: 'Not allowed by CORS',
      }),
    );
  }
};
