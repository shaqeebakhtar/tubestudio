import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import db from '@/lib/db';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope:
            'openid email profile https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, account }) => {
      const user = await db.user.findFirst({
        where: {
          email: token?.email,
        },
      });

      if (account) {
        token.accessToken = account.access_token as string;
      }

      if (user) {
        token.id = user.id;
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.accessToken = token.accessToken as string;
      }

      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
