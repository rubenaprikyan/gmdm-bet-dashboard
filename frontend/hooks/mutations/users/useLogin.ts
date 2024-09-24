import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { noop } from '@/lib/utils';

import endpoints from '@/api/endpoints';

import UsersApi, { LoginParams, LoginSuccessViewModel } from '@/api/UsersApi';
import { BaseError } from '@/api/view-models';

type UseLoginProps = Omit<
  UseMutationOptions<LoginSuccessViewModel, void, LoginParams>,
  'mutationKey' | 'mutationFn'
>;

/**
 * The layer for business logic
 * Accepts callbacks to set UI related behavior
 */
function useLogin({
  onSuccess = noop,
  onError = noop,
  ...rest
}: UseLoginProps) {
  return useMutation<LoginSuccessViewModel, void, LoginParams>({
    mutationKey: [endpoints.users.login()],
    mutationFn: async (args: LoginParams) => {
      const response = await UsersApi.login(args);
      return response.data;
    },
    onSuccess: (data, variables, context) => {
      localStorage.setItem('access_token', data.access_token);
      onSuccess?.(data, variables, context);
    },
    // this will be BaseError, need to do some type inference to get the specific error
    onError: (error, variables, context) => {
      // TODO transform BaseError to a specific Error type to send UI
      onError?.(error, variables, context);
    },
    ...rest,
  });
}

export default useLogin;
