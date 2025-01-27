import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import Image from 'next/image';
import React, { useState } from 'react';
import '../../../styles/login.css';
import { gql, useMutation } from 'urql';
import fdtojson from '@/utils/fdtojson';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import '@/styles/login.css';
import Link from 'next/link';
import logoNew from '@/public/newDesign/new-logo.svg';
import InputGroup from '@/components/Elements/InputGroup';
import errorImg from '@/public/newDesign/password-incorrect-img.svg';
import log from '@/utils/log-browser';
import { SU_FORM_ERROR, SU_FORM_SUBMITTED } from '@/constants/browserTracking';

const SIGNUP = gql`
  mutation RegisterUser(
    $name: String!
    $email: String!
    $password: String!
    $phone: String
    $company: String
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      phone: $phone
      company: $company
    ) {
      id
      email
      isAdmin
      name
      phone
      company
    }
  }
`;

export const SEND_VERIFICATION_EMAIL = gql`
  mutation SEND_VERIFICATION($email: String!) {
    sendVerificationEmail(email: $email) {
      message
    }
  }
`;

const SignUpContainer = () => {
  const router = useRouter();
  const [{ fetching: registering }, registerUser] = useMutation(SIGNUP);
  const [{ fetching: sendingEmail }, sendVerification] = useMutation(
    SEND_VERIFICATION_EMAIL
  );

  const fetching = registering || sendingEmail;
  const [errors, setErrors] = useState('');
  const [error, setError] = useState('');
  const [errorCheckbox, setErrorCheckbox] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setErrorCheckbox('');
    setPasswordError('');
    setErrors('');

    const formData = new FormData(e.target as HTMLFormElement);
    const json = fdtojson(formData);

    const { name, email, company } = json;

    log.track(SU_FORM_SUBMITTED, { name, email, company });

    if (!json.agreeTnC) {
      setErrorCheckbox('Please agree to terms and conditions to register');
      return;
    }
    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(json.password)) {
      const errorMsg =
        'Password should contain at least one letter and one number';
      setPasswordError(errorMsg);
      log.track(SU_FORM_ERROR, { error: errorMsg });
      return;
    }
    // if (json.confirmPassword !== json.password) {
    //   return toast.error('Passwords do no match');
    // }
    registerUser(json).then(async (data) => {
      if (
        (data.error?.graphQLErrors[0]?.message?.indexOf(
          'Unique constraint failed'
        ) || -1) > -1
      ) {
        setError('Email is already registered');
      } else if (data.error?.graphQLErrors[0]) {
        toast.error(data.error.graphQLErrors[0].message);
      } else if (data.error) {
        toast.error('Unknown error');
      } else {
        await sendVerification({ email: json.email });
        router.push(`/login`);
      }
    });
  };
  return (
    <div className="flex items-center  flex-col   py-16 bg-white">
      <Link href={'/'}>
      <h1 className='flex items-center justify-center text-[40px] font-bold'>
            Aidchain SignUp
          </h1>
      </Link>
      <form action="" onSubmit={handleSubmit} className="w-1/3 mt-20 md:mt-0">
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" name="name" required />
          <Input
            type="text"
            placeholder="E-mail"
            name="email"
            required
            style={
              error
                ? {
                    border: '1px solid #B5446E',
                    outlineColor: '#B5446E',
                  }
                : {}
            }
          />
          {error && (
            <div className=" flex items-center gap-2.5 relative" role="alert">
              <Image src={errorImg} alt="" className="w-5 " />
              {error}
            </div>
          )}
          <InputGroup
            placeholder="Password"
            name="password"
            required
            inputStyle={
              passwordError
                ? {
                    border: '1px solid #B5446E',
                    outlineColor: '#B5446E',
                  }
                : {}
            }
          />
          {passwordError && (
            <div
              className=" flex items-center gap-2.5 relative text-sm"
              role="alert"
            >
              <Image src={errorImg} alt="" className="w-5 " />
              {passwordError}
            </div>
          )}
          <Input type="text" placeholder="Phone Number" name="phone" />
          <Input type="text" placeholder="Company" name="company" />
          <div className="flex items-center gap-[10px] mt-5">
            <input
              id="checkbox"
              type="checkbox"
              name="agreeTnC"
              className="w-4 h-4 border border-[#BFD7FF1A] bg-[#BFD7FF4D] focus-within:outline-[#bfd6ff9c]"
            />
            <label htmlFor="checkbox" className="text-xs font-poppins">
              I have read & agree to Theah&apos;s{' '}
              <Link href={'/terms-conditions'}>
                <span className="text-[#085CF0]">Terms & Conditions.</span>
              </Link>
            </label>
          </div>
          {errorCheckbox && (
            <div
              className=" flex items-center gap-2.5 relative text-xs"
              role="alert"
            >
              <Image src={errorImg} alt="" className="w-4 " />
              {errorCheckbox}
            </div>
          )}

          <Button type="submit" text="Sign Up" loading={fetching} />
        </div>
      </form>
      <span className="text-sm text-[#0D1342] mt-20 md:mt-0">
        Already have an account?{' '}
        <Link href={'/login'} className="text-[#FFBB0B] font-semibold">
          Login
        </Link>
      </span>
    </div>
  );
};

export default SignUpContainer;
