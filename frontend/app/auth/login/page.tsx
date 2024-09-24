'use client';

import * as React from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomFormField from '@/components/CustomFormField';

import { LoginSchema } from './schemas';
import { useLogin } from '@/hooks/mutations/users';
import { BaseError } from '@/api/view-models';

type FormState = yup.InferType<typeof LoginSchema>;

const defaultValues: FormState = {
  email: 'test@gmdm.com',
  password: 'Password123!',
};

export default function Login() {
  const router = useRouter();

  const { mutate, isPending } = useLogin({
    onSuccess: async () => {
      toast.success('Successfully signed in !', {
        duration: 3000
      });

      router.push('/');
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error // TODO the same inference as in useLogin will fix typescript issue
    onError: (error: BaseError) => {
      toast.error(error.getError().details);
    },
  });

  const form = useForm<FormState>({
    mode: 'onTouched',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit = React.useCallback((formData: FormState) => {
      mutate(formData);
    },
    [mutate]
  );

  return (
    <div className='w-full h-full flex justify-center pt-20'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form form={form} onSubmit={onSubmit} className='relative space-y-3'>
            <CustomFormField
              name='email'
              labelText='Email'
              disabled={isPending}
              renderController={({ field }) => (
                <Input
                  {...field}
                  placeholder='Enter your email...'
                  type='email'
                />
              )}
            />
            <CustomFormField
              name='password'
              labelText='Password'
              disabled={isPending}
              renderController={({ field }) => (
                <Input
                  {...field}
                  placeholder='Enter your password...'
                  type='password'
                />
              )}
            />
            <div className='flex justify-end gap-2'>
              <Button type='submit' disabled={isPending}>
                {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Login
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
