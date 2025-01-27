import Login from '../../components/Loginn';
import getTitle from '@/utils/getTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: getTitle('Log in'),
};

export default Login;
