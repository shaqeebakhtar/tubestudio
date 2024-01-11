import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import React from 'react';

const Channel = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <p className="text-wrap min-w-0">userId : {session?.user.id}</p>
      {/* <p className="text-wrap min-w-0">
        accessToken : {session?.user.accessToken}
      </p> */}
    </>
  );
};

export default Channel;
