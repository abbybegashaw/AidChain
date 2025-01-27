import SignUp from '@/components/SignUp';
import getTitle from '@/utils/getTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: getTitle('Sign up'),
};

export default SignUp;
