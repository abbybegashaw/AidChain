'use client';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import Image from 'next/image';
import React, { useState } from 'react';
import '../../../styles/login.css';
import { gql, useMutation } from 'urql';
import Cookies from 'js-cookie';
import fdtojson from '@/utils/fdtojson';
import { set } from '@/utils/storage';
import Link from 'next/link';
import logoNew from '@/public/newDesign/new-logo.svg';
import formImgMob from '@/public/newDesign/form-top-img.svg';
import InputGroup from '@/components/Elements/InputGroup';
import errorImg from '@/public/newDesign/password-incorrect-img.svg';
import { useRouter } from 'next/navigation';
import log from '@/utils/log-browser';
import { LI_FORM_ERROR, LI_FORM_SUBMITTED } from '@/constants/browserTracking';

const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      token
      user {
        address
        country
        email
        id
        profileImage
        isAdmin
        name
        state
        requestCount
      }
    }
  }
`;

const LoginContainer = () => {
  const [{ fetching }, login] = useMutation(LOGIN);
  const [error, setError] = useState<string | undefined>(undefined);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);
    try {
      const { email, password } = fdtojson(new FormData(e.target as HTMLFormElement));
      log.track(LI_FORM_SUBMITTED, { email });
      setEmail(email);
      const response = await login({ email, password });
      const { data } = response;

      if (data?.login.error) {
        setError(data.login.error);
        if (data.login.error.includes('Email is not verified')) {
          setEmailNotVerified(true);
        }
      } else {
        Cookies.set('token', data?.login.token);
        set('user', data?.login.user);
        setTimeout(() => {
          window.location.href = '/inbox';
        }, 300);
      }
    } catch (err) {
      const errorMsg = 'An unexpected error occurred. Please try again.';
      setError(errorMsg);
      log.track(LI_FORM_ERROR, { error: errorMsg });
    }
  };

  return (
    <div className="flex lg:w-[430px] lg:min-w-[430px] w-full flex-col md:justify-between lg:p-10 py-10 px-[22px] bg-white">
      
      <Link href={'/'}>
        <p className='font-bold text-2xl'>AidChain</p>
      </Link>
      <Image
        src={formImgMob}
        alt=""
        className="absolute top-0 right-0 lg:hidden"
      />
      <form onSubmit={handleLogin} className="mt-40 md:mt-0">
        <div className="flex flex-col gap-6">
          <Input type="text" placeholder="E-mail" name="email" />
          <InputGroup placeholder="Password" name="password" />
        </div>
        {error && (
          <div className="flex items-center gap-2.5 relative mt-5" role="alert">
            <Image src={errorImg} alt="" className="w-5" />
            <span>
              {error}
              {emailNotVerified && (
                <span>
                  . We have sent you a verification link to activate your account. You can request a new link{' '}
                  <span className="underline">
                    <Link href={`/email-verification?email=${email}`}>
                      here
                    </Link>
                  </span>
                  .
                </span>
              )}
            </span>
          </div>
        )}
        <div>
          <span className="float-right text-xs md:text-sm font-poppins md:font-inter text-[#0D1342] mt-5">
            <Link href="/forgot-password">Forgot Password?</Link>
          </span>
        </div>
        <Button
          loading={fetching}
          text="Sign In"
          style={{ marginTop: '40px' }}
        />
      </form>
      <span className="text-sm text-[#0D1342] mt-40 md:mt-0">
        Do not have an account?{' '}
        <Link href={'/register'} className="text-[#FFBB0B] font-medium md:font-semibold">
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default LoginContainer;
