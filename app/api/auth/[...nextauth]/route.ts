import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Google Custom Login",
      credentials: {
        token: { label: "Google ID Token", type: "text" },
      },
      async authorize(credentials) {
        const token = credentials?.token;

        if (!token) return null;

        try {
          const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
          });

          const payload = ticket.getPayload();
          if (!payload) return null;

          // Return user object (stored in NextAuth session)
          return {
            id: payload.sub,
            name: payload.name,
            email: payload.email,
            picture: payload.picture,
          };
        } catch (error) {
          console.error("Token verification failed:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 0,
  },
});

export { handler as GET, handler as POST };
