import { AppContext } from '@/utils/context';
import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import { gql, useQuery } from 'urql';

export const GET_USER = gql`
  query User {
    user {
      email
      id
      isAdmin
      name
      requestCount
      phone
      company
      propertyDescriptions

      aiTokens
      prompt
      systemPrompt
      aiKey

      subscription {
        status
      }
    }
  }
`;

function SetContext() {
  const [{ fetching: fetchingCurrentUser, data: userData }] = useQuery({
    query: GET_USER,
    pause: !Cookies.get('token'),
  });
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    if (!fetchingCurrentUser && userData?.user) {
      setUser?.(userData.user);
    }
  }, [fetchingCurrentUser, userData]);

  return null;
}

export default SetContext;
