import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Channel = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) redirect('/api/auth/login');

  return (
    <>
      <p>userId : {session?.user.id}</p>
      {/* <p>
        accessToken : {session?.user.accessToken}
      </p> */}
    </>
  );
};

export default Channel;
